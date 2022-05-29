import { Select, Form, Input, Radio } from 'antd'
import { TField } from 'Definitions'

const Field = ({ field_data, name }: TFieldProps) => {
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
    if (type === 'radio' && Array.isArray(value)) {
        return (
            <Form.Item name={name} label={label} required={!isOptional}>
                <Radio.Group>
                    {value.map((option: string, idx) => (
                        <Radio key={idx} value={idx}>
                            {option}
                        </Radio>
                    ))}
                </Radio.Group>
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

type TFieldProps = {
    name: string
    field_data: TField
}

export default Field
