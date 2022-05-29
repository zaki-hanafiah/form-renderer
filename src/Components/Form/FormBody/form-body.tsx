import { Button, Form, Row } from 'antd'
import Field from 'Components/Form/Field'
import { TField } from 'Definitions'
import { convertToSnakeCase, mapInitialValues } from 'Utils'

const FormBody = ({ field_definitions }: TFormBodyProps) => {
    const [generatedForm] = Form.useForm()
    const mapped_initial_values = mapInitialValues(field_definitions)
    console.log(mapped_initial_values)

    const onFinish = () => {
        const form_values = generatedForm.getFieldsValue(true)
        console.log(form_values)
        // paste output on screen here
    }
    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            form={generatedForm}
            name="generatedForm"
            id="generatedForm"
            initialValues={mapped_initial_values}
            onFinish={onFinish}
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
                    onClick={onFinish}
                    style={{ margin: '0 auto' }}
                    // loading={is_loading}
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
