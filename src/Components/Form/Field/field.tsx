import { Select, Form, Input, Radio } from 'antd'
import { TField } from 'Definitions'

const FormField = ({ field_data, name }: TFormField) => {
    const {
        isHidden,
        isOptional,
        label,
        value,
        type,
        default: defaultValue,
    } = field_data as TField

    if (type === 'hidden' || isHidden) {
        return null
    }
    if (type === 'select' && Array.isArray(value)) {
        return (
            <Form.Item name={name} label={label} required={!isOptional}>
                <Select
                    placeholder="Please select a value"
                    defaultValue={defaultValue}
                >
                    {value.map((option: string) => (
                        <Select.Option key={option} value={option}>
                            {option}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
        )
    }
    if (type === 'radio') {
        return (
            <Form.Item
                name={name}
                valuePropName="checked"
                required={!isOptional}
            >
                <Radio>{label}</Radio>
            </Form.Item>
        )
    }
    if (type === 'telephone') {
        return (
            <Form.Item label={label} name={name}>
                <Input
                    defaultValue={defaultValue}
                    required={!isOptional}
                    type="telephone"
                />
            </Form.Item>
        )
    }
    return (
        <Form.Item label={label} name={name}>
            <Input
                defaultValue={defaultValue}
                required={!isOptional}
                type="text"
            />
        </Form.Item>
    )
}

type TFormField = {
    name: string
    field_data: TField
}

export default FormField
