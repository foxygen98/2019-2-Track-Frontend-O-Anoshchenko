// import {api_key, api_url} from './constants'
import * as T from './types'

export default function get_api_url (param: T.ITranslate): string {
    if (param.format) {
        return encodeURI(`${process.env.api_url}?key=${process.env.api_key}&text=${param.text}&lang=${param.lang}&format=${param.format}`)
    }
    return encodeURI(`${process.env.api_url}?key=${process.env.api_key}&text=${param.text}&lang=${param.lang}`)
}
