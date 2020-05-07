import React, { useState, MouseEvent } from 'react';
import styles from './Translate.module.css'
import * as T from './types'

function Translate() {
    const [lang, setLang]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('DETECT LANGUAGE')
    const [input, setInput]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('')

    function ChangeLang(event: MouseEvent): any {
        event.preventDefault();
        setLang('lang')
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): any {
        event.preventDefault()
        if (input === '') {
            return
        }
        setInput('')
    }

    function handleTextChange(event: any) {
        setInput(event.target.value)
    }

    function LangName(this: T.IProps, props: T.IProps) {
        return (
            <button className={styles.Name} onClick={ChangeLang}>{props.lang}</button>
        )
    }

    return (
        <>
            <form className={styles.Form}>
                <div className={styles.LangSelection}>
                    <LangName lang={'DETECT LANGUAGE'} />
                    <LangName lang={'ENGLISH'} />
                    <LangName lang={'RUSSIAN'} />
                </div>
                <textarea className={styles.InputLeft} lang={lang} value={lang} />
                <textarea disabled className={styles.InputRight} value={'Перевод'} />
            </form>
        </>
    );
}

export default Translate;