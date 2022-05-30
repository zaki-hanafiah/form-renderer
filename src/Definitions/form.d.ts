export type TField = {
    isHidden?: boolean
    isOptional?: boolean
    label?: string
    type: string
    default?: string | number
    value?: string | number | string[]
}

export type TFormValue = {
    [string]: string
}
