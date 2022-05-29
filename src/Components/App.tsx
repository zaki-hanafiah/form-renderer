import { useEffect, useRef, useState } from 'react'
import { getFormDefinitions } from 'Services'
import MainLayout from './Layout/main'
import 'Styles/App.css'
import { FORM_DEFINITIONS } from '../Constant/form_definitions'

function App() {
    const hasFetchedAPI = useRef(false)

    const [is_loading, setIsLoading] = useState(true)
    const [form_definitions, setFormDefinitions] = useState({})
    useEffect(() => {
        if (hasFetchedAPI.current) {
            return
        }
        getFormDefinitions()
            .then((response) => {
                if (!response.error) {
                    setFormDefinitions(response)
                }
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                // TEMP: use static form definitions to render form initially
                setFormDefinitions(FORM_DEFINITIONS)
                setIsLoading(false)
            })
        hasFetchedAPI.current = true
    }, [])

    useEffect(() => {
        if (form_definitions) {
            console.log(form_definitions)
        }
    }, [form_definitions])

    return (
        <MainLayout>
            {is_loading ? <div>is loading</div> : <div>has loaded</div>}
        </MainLayout>
    )
}

export default App
