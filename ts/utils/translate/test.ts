import TranslateUtils from '../translate'
import checkCache from './Cache'
import * as T from './types'

const input1: T.ITranslate = {
    text: ['Hello world!'],
    lang: 'ru'
}


const input2: T.ITranslate = {
    text: ['Привет!'],
    lang: 'ru-en',
    format: 'html'
}

const input3: T.ITranslate = {
    text: ['Hello world!'],
    lang: 'ru'
}

const input4: T.ITranslate = {
    text: ['Hehehe!'],
    lang: 'ru'
}

const input: T.ITranslate[] = [
    {
        text: ['Hello'],
        lang: 'ru'
    },
    {
        text: ['Привет'],
        lang: 'en',
        format: 'html'
    },
    {
        text: ['I love frontend'],
        lang: 'en-ru'
    },
    {
        text: ['Hello!'],
        lang: 'abrakadabra'
    },
]

async function test() {
    let i: number = 0
    for (i; i < input.length; i += 1) {
        const translated = await TranslateUtils.translate(input[i])
        console.log(input[i])
        console.log(translated)
    }
}

test()
