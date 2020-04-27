export interface ISize {
    width: number
    height: number
}

export interface IMathScore {
    math: { [id: string] : number}
}

export interface IScore {
    name: string
    value: number 
}

export interface IProps {
    math: IScore[]
}
