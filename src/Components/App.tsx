import { useEffect, useRef, useState } from 'react'
import { getFormDefinitions } from 'Services'
import { TField } from 'Definitions'
import { FORM_DEFINITIONS } from 'Constants/form_definitions'
import FormBody from 'Components/Form/FormBody'
import MainLayout from './Layout/main'
import 'Styles/App.css'

function App() {
    const hasFetchedAPI = useRef(false)

    const [is_loading, setIsLoading] = useState<boolean>(true)
    const [field_definitions, setFieldDefinitions] = useState<TField[]>([])
    useEffect(() => {
        if (hasFetchedAPI.current) {
            return
        }
        getFormDefinitions()
            .then((response) => {
                if (!response.error) {
                    setFieldDefinitions(response)
                }
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                // TEMP: use static form definitions to render form initially
                setFieldDefinitions(FORM_DEFINITIONS)
                setIsLoading(false)
            })
        hasFetchedAPI.current = true
    }, [])

    useEffect(() => {
        if (field_definitions) {
            console.log(field_definitions)
        }
    }, [field_definitions])

    return (
        <MainLayout>
            {is_loading ? (
                <div>is loading</div>
            ) : (
                <div>
                    <FormBody field_definitions={field_definitions} />
                </div>
            )}
        </MainLayout>
    )
}

export default App
