import { useEffect, useRef, useState } from 'react'
import { Button, Result, Spin } from 'antd'
import { getFormDefinitions } from 'Services'
import { TField } from 'Definitions'
import { FORM_DEFINITIONS } from 'Constants/form_definitions'
import FormBody from 'Components/Form/FormBody'
import MainLayout from './Layout/main'
import 'Styles/App.css'
import { isLocalhost } from '../Utils'

function App() {
    const hasFetchedAPI = useRef(false)

    const [is_loading, setIsLoading] = useState<boolean>(true)
    const [field_definitions, setFieldDefinitions] = useState<TField[]>([])
    const [has_api_error, setHasAPIError] = useState<boolean>(false)

    const fetchAPI = () => {
        setIsLoading(true)
        setHasAPIError(false)
        if (isLocalhost) {
            setFieldDefinitions(FORM_DEFINITIONS)
            setIsLoading(false)
        } else {
            getFormDefinitions()
                .then((response) => {
                    if (!response.error) {
                        setFieldDefinitions(response)
                    }
                    setIsLoading(false)
                })
                .catch((error) => {
                    console.warn(error)
                    setHasAPIError(true)
                    setIsLoading(false)
                })
        }
    }

    useEffect(() => {
        if (hasFetchedAPI.current) {
            return
        }
        fetchAPI()

        hasFetchedAPI.current = true
    }, [])

    if (is_loading)
        return (
            <MainLayout>
                <Spin tip="Loading..." />
            </MainLayout>
        )
    return (
        <MainLayout>
            {has_api_error ? (
                <Result
                    status="error"
                    title="There was an issue fetching the API, please try again."
                    extra={
                        <Button type="primary" onClick={fetchAPI}>
                            Try again
                        </Button>
                    }
                />
            ) : (
                <div>
                    <FormBody field_definitions={field_definitions} />
                </div>
            )}
        </MainLayout>
    )
}

export default App
