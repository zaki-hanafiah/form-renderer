import { Button, Col, Divider, Form, Row } from 'antd'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/monikai.css'
import Field from 'Components/Form/Field'
import { ObjectWithAnyKey, TField } from 'Definitions'
import {
    convertBackToLabel,
    convertToSnakeCase,
    mapInitialValues,
    mapIsValidFields,
} from 'Utils'
import { Fragment, useState } from 'react'

const FormBody = ({ field_definitions }: TFormBodyProps) => {
    const [generatedForm] = Form.useForm()
    const mapped_initial_values = mapInitialValues(field_definitions)
    const [json_output, setJSONOutput] = useState<ObjectWithAnyKey | undefined>(
        undefined
    )

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
                    label: convertBackToLabel(name),
                    value: form_values[name as keyof typeof form_values],
                    isValid:
                        mapped_validation[
                            name as keyof typeof mapped_validation
                        ],
                },
            })
        })
        // paste output on screen here
        setJSONOutput(printed_output)
        console.log(JSON.stringify(printed_output))
    }
    return (
        <Fragment>
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
            {json_output && (
                <Fragment>
                    <Divider>
                        <strong>JSON Output</strong>
                    </Divider>
                    <Row>
                        <Col span={18} offset={3}>
                            <JSONPretty
                                id="json-pretty"
                                data={json_output}
                            ></JSONPretty>
                        </Col>
                    </Row>
                </Fragment>
            )}
        </Fragment>
    )
}
type TFormBodyProps = {
    field_definitions: TField[]
}

export default FormBody
