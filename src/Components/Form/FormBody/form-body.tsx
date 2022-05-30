import { Button, Form, Row } from 'antd'
import Field from 'Components/Form/Field'
import { TField } from 'Definitions'
import { convertToSnakeCase, mapInitialValues, mapIsValidFields } from 'Utils'

const FormBody = ({ field_definitions }: TFormBodyProps) => {
    const [generatedForm] = Form.useForm()
    const mapped_initial_values = mapInitialValues(field_definitions)

    const onSubmit = () => {
        const form_values = generatedForm.getFieldsValue(true)
        const mapped_validation = mapIsValidFields(
            form_values,
            field_definitions
        )

        const printed_output = {}
        Object.keys(mapped_validation).forEach((name: string) => {
            Object.assign(printed_output, {
                [name]: {
                    label: name,
                    value: form_values[name as keyof typeof form_values],
                    isValid:
                        mapped_validation[
                            name as keyof typeof mapped_validation
                        ],
                },
            })
        })
        // paste output on screen here
        console.log(printed_output)
    }
    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            form={generatedForm}
            name="generatedForm"
            id="generatedForm"
            initialValues={mapped_initial_values}
            onFinish={onSubmit}
        >
            {field_definitions.map((field, idx: number) => {
                return (
                    <Field
                        name={
                            field.label
                                ? convertToSnakeCase(field.label)
                                : `field_${idx}`
                        }
                        key={`field_${idx}`}
                        field_data={field}
                    />
                )
            })}
            <Row>
                <Button
                    type="primary"
                    onClick={onSubmit}
                    style={{ margin: '0 auto' }}
                >
                    Submit Form
                </Button>
            </Row>
        </Form>
    )
}
type TFormBodyProps = {
    field_definitions: TField[]
}

export default FormBody
