import React, { useState } from 'react';
import styles from './Translate.module.css'
import * as T from './types'
import * as TU from './utils/translate/types'
import TranslateUtils from './utils/translate'

const languages: T.ILang = {
    RUSSIAN: 'ru',
    ENGLISH: 'en',
    DETECT: ''
}

function Translate() {
    const [lang, setLang]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('DETECT')
    const [Tlang, setTLang]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('RUSSIAN')
    const [input, setInput]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('')
    const [translated, setTranslated] = useState<TU.IAPIResponse>({ code: 200, lang: '', text: [''] })

    function ChangeLang(props: T.IProps): void {
        if (props.for === 'from') {
            setLang(props.lang)
        } else {
            setTLang(props.lang)
        }
    }

    async function handleSubmit(event: React.KeyboardEvent<HTMLTextAreaElement>): Promise<any> {
        if (event.charCode === 13 || event.charCode === 32) {
            if (event.charCode === 32) {
                setInput(input + event.key)
            }
            event.preventDefault()
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
    }

    function textChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        console.log('hi')
        setInput(event.target.value)
        console.log(input)
        setTranslated({ code: 200, lang: '', text: [''] })
    }

    function LangName(props: T.IProps) {
        return (
            <button className={`${styles.Name} ${styles[props.lang]}`} onClick={() => ChangeLang(props)}>{props.lang}</button>
        )
    }

    return (
        <>
            <div className={styles.Box}>
                <div>
                    <div className={styles.LangSelectionLeft}>
                        <LangName lang={'DETECT'} for={'from'} />
                        <LangName lang={'ENGLISH'} for={'from'} />
                        <LangName lang={'RUSSIAN'} for={'from'} />
                    </div>
                    <textarea className={styles.InputLeft} onKeyPress={handleSubmit} onChange={textChange} value={input} />
                </div>
                <div>
                    <div className={styles.LangSelectionRight}>
                        <LangName lang={'ENGLISH'} for={'to'} />
                        <LangName lang={'RUSSIAN'} for={'to'} />
                    </div>
                    <textarea disabled className={styles.InputRight} value={translated.text} />
                </div>
            </div>
        </>
    );
}

export default Translate;