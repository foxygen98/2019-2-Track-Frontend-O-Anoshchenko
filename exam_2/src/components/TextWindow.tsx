import React, { useState, useEffect } from 'react';
import styles from '../styles/Translate.module.css'
import * as T from '../types/types'
import * as TU from '../utils/translate/types'
import TranslateUtils from '../utils/translate'
import { languages } from '../types/constants'

function Translate() {
    const [lang, setLang]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('DETECT')
    const [Tlang, setTLang]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('RUSSIAN')
    const [input, setInput]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('')
    const [translated, setTranslated] = useState<TU.IAPIResponse>({ code: 200, lang: '', text: [''] })
    const [leftPress, setLeftPress] = useState<string>('DETECT')
    const [rightPress, setRightPress] = useState<string>('DETECT')

    function ChangeLang(props: T.IProps): void {
        if (props.for === 'from') {
            setLang(props.lang)
            setLeftPress(props.lang)
        } else {
            setTLang(props.lang)
            setRightPress(props.lang)
        }
    }

    function handleSubmit(event: React.KeyboardEvent<HTMLTextAreaElement>): void {
        if (event.charCode === 13) {
            event.preventDefault()
            newTranslate()
        }
    }

    async function newTranslate(): Promise<void> {
        if (input !== '') {
            const fromLang = languages[lang]
            let toLang = languages[Tlang]
            if (fromLang !== '') {
                toLang = `${fromLang}-${toLang}`
            }
            const inputText: TU.ITranslate[] = [{
                text: [input],
                lang: toLang
            }]
            const transl = await TranslateUtils.translate(inputText[0])
            setTranslated(transl)
        } else {
            setTranslated({ code: 200, lang: '', text: [''] })
        }
    }

    function textChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        setInput(event.target.value)
    }

    function LangName(props: T.IProps) {
        let style = styles.Name
        if (props.lang === props.pressButt) {
            style = `${styles.Name} ${styles.Press}`
        }
        return (
            <button className={style} onClick={() => ChangeLang(props)}>{props.lang}</button>
        )
    }

    useEffect(() => {
        newTranslate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lang, Tlang, input])

    return (
        <>
            <div className={styles.Box}>
                <div>
                    <div className={styles.LangSelectionLeft}>
                        <LangName lang={'DETECT'} for={'from'} pressButt={leftPress} />
                        <LangName lang={'ENGLISH'} for={'from'} pressButt={leftPress} />
                        <LangName lang={'RUSSIAN'} for={'from'} pressButt={leftPress} />
                    </div>
                    <textarea className={styles.InputLeft} onKeyPress={handleSubmit} onChange={textChange} value={input} />
                </div>
                <div>
                    <div className={styles.LangSelectionRight}>
                        <LangName lang={'ENGLISH'} for={'to'} pressButt={rightPress} />
                        <LangName lang={'RUSSIAN'} for={'to'} pressButt={rightPress} />
                    </div>
                    <textarea disabled className={styles.InputRight} value={translated.text} />
                </div>
            </div>
        </>
    );
}

export default Translate;
