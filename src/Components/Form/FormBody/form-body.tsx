import { Button, Form } from 'antd'
import Field from 'Components/Form/Field'
import { TField, ObjectWithAnyKey } from 'Definitions'
import { convertToSnakeCase } from '../../Utils'

const FormBody = ({ field_definitions }: TFormBodyProps) => {
    const [generatedForm] = Form.useForm()
    const onFinish = (values: ObjectWithAnyKey) => {
        console.log(values)
    }
    return (
        <Form
            form={generatedForm}
            name="generatedForm"
            id="generatedForm"
            // initialValues={}
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
            <Button
                form="generatedForm"
                key="submit"
                htmlType="submit"
                type="primary"
                // loading={is_loading}
            >
                Submit Form
            </Button>
        </Form>
    )
}
type TFormBodyProps = {
    field_definitions: TField[]
}

export default FormBody
