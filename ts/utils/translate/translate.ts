import * as T from './types'
import get_api_url from './get_api_url'
import checkCache from './Cache'
import { saveCache } from './Cache'

const fetch = require("node-fetch")

export async function translate(param: T.ITranslate): Promise<T.IAPIResponse> {
    const url: string = get_api_url(param)
    const res: any = checkCache(param)
    if (res) {
        return res
    }
    const result = fetch(url, {method: 'POST'})
        .then((response: any) => response.json())
        .then((data: T.IAPIResponse) => {
            saveCache(param, data)
            return data
        })
        .catch((err: T.IErrorResponse) => {
            return err
        })
    return result
}
