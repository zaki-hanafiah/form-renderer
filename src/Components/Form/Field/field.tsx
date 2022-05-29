import { Select, Form, Input, Radio, Space } from 'antd'
import { TField } from 'Definitions'

const Field = ({ field_data, name }: TFieldProps) => {
    const { isHidden, isOptional, label, value, type } = field_data as TField

    if (type === 'hidden' || isHidden) {
        return null
    }
    if (type === 'select' && Array.isArray(value)) {
        return (
            <Form.Item name={name} label={label} required={!isOptional}>
                <Select placeholder="Please select a value">
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
                    <Space direction="vertical">
                        {value.map((option: string, idx) => (
                            <Radio
                                key={idx}
                                value={option.replace(/ *\([^)]*\) */g, '')}
                            >
                                {option}
                            </Radio>
                        ))}
                    </Space>
                </Radio.Group>
            </Form.Item>
        )
    }
    if (type === 'telephone') {
        return (
            <Form.Item label={label} name={name} required={!isOptional}>
                <Input type="tel" />
            </Form.Item>
        )
    }
    return (
        <Form.Item label={label} name={name} required={!isOptional}>
            <Input type="text" />
        </Form.Item>
    )
}

type TFieldProps = {
    name: string
    field_data: TField
}

export default Field
