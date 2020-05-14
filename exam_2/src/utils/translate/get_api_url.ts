// import {api_key} from './constants'
import * as T from './types'

const api_url: string = 'https://translate.yandex.net/api/v1.5/tr.json/translate'

export default function get_api_url (param: T.ITranslate): string {
    if (param.format) {
        return encodeURI(`${api_url}?key=${process.env.API_KEY}&text=${param.text}&lang=${param.lang}&format=${param.format}`)
    }
    return encodeURI(`${api_url}?key=${process.env.API_KEY}&text=${param.text}&lang=${param.lang}`)
}
