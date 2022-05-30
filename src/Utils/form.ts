import { TField, TFormValue } from '../Definitions'
import { convertToSnakeCase } from './string'

export const mapInitialValues = (field_definitions: TField[]) => {
    const mapped_initial_values = {}
    field_definitions.forEach((field: TField, idx: number) => {
        if (!field.isHidden) {
            const name = field.label
                ? convertToSnakeCase(field.label)
                : `field_${idx}`
            const value = field.default || ''
            Object.assign(mapped_initial_values, { [name]: value })
        }
    })
    return mapped_initial_values
}

const mapFieldConfig = (field_definitions: TField[]) => {
    const mapped_field_config = {}
    field_definitions.forEach((field: TField, idx: number) => {
        if (!field.isHidden) {
            const name = field.label
                ? convertToSnakeCase(field.label)
                : `field_${idx}`
            const rules = []
            if (!field.isOptional) {
                rules.push('isRequired')
            }
            if (field.type === 'telephone') {
                rules.push('isPhone')
            }
            if (field.type === 'email') {
                rules.push('isEmail')
            }
            Object.assign(mapped_field_config, {
                [name]: rules,
            })
        }
    })
    return mapped_field_config
}

const validateField = (value: string, rules: string[]) => {
    if (rules.includes('isRequired') && value.length < 1) {
        return false
    }
    if (rules.includes('isPhone')) {
        if (!/[0-9-]{7,12}$/g.test(value)) {
            return false
        }
    }
    if (rules.includes('isEmail')) {
        if (!/\S+@\S+\.\S+/.test(value)) {
            return false
        }
    }
    return true
}

export const mapIsValidFields = (
    form_values: TFormValue,
    field_definitions: TField[]
) => {
    const field_config = mapFieldConfig(field_definitions)

    const mapped_is_valid_fields = {}
    Object.keys(form_values).forEach((name: string) => {
        const value: string = form_values[name as keyof typeof form_values]
        const rules: string[] = field_config[name as keyof typeof field_config]
        if (rules) {
            Object.assign(mapped_is_valid_fields, {
                [name]: validateField(value, rules),
            })
        }
    })
    return mapped_is_valid_fields
}
