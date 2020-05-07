import { ifError } from "assert";

export interface ITranslate {
    text: string[]
    lang: string
    format?: string
}

export interface IAPIResponse {
    code: number
    lang: string
    text: string[]
}

export interface IErrorResponse {
    code: number
    message: string
}

export interface ICache {
    [index: string]: ITranslate
}
