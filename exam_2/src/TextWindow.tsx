import React, { useState } from 'react';
import styles from './Translate.module.css'
import * as T from './types'
import * as TU from './utils/translate/types'
import TranslateUtils from './utils/translate'
import { languages } from './constants'

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
        newTranslate()
    }

    function handleSubmit(event: React.KeyboardEvent<HTMLTextAreaElement>): void {
        if (event.charCode === 13 || event.charCode === 32) {
            if (event.charCode === 32) {
                setInput(input + event.key)
            }
            event.preventDefault()
            newTranslate()
        }
    }

    async function newTranslate(): Promise<void> {
        const fromLang = languages[lang]
        let toLang = languages[Tlang]
        if (fromLang !== '') {
            toLang = `${fromLang}-${toLang}`
            console.log(toLang)
        }
        const inputText: TU.ITranslate[] = [{
            text: [input],
            lang: toLang
        }]
        const transl = await TranslateUtils.translate(inputText[0])
        setTranslated(transl)
    }

    function textChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        console.log('hi')
        setInput(event.target.value)
        console.log(input)
        setTranslated({ code: 200, lang: '', text: [''] })
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
