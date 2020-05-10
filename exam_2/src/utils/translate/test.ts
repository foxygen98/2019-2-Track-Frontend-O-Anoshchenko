import TranslateUtils from '../translate'
import checkCache from './Cache'
import * as T from './types'

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
    for (const testData of input) {
        const translated = await TranslateUtils.translate(testData)
        console.log(testData)
        console.log(translated)
    }
}

test()
