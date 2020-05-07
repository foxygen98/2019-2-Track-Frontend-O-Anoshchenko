import * as T from './types'

var cache: T.ICache = {}

export default function checkCache(param: T.ITranslate): T.ITranslate | undefined {
    if (cache[`${param.text}${param.lang}`]) {
        return cache[`${param}${param.lang}`]
    }
}

export function saveCache(param: T.ITranslate, data: T.IAPIResponse): void {
    cache[`${param}${param.lang}`] = data
}
