import { TField } from '../Definitions'
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
