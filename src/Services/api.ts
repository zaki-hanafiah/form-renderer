export const getFormDefinitions = async () => {
    const API_URI = process.env.REACT_APP_API_URI
    if (!API_URI) {
        return { error: 'Endpoint is undefined' }
    }
    const form_definitions = await fetch(`${API_URI}/form`, {
        headers: { 'Content-Type': 'application/json' },
    })
    const { ok }: Response = form_definitions
    return ok
        ? form_definitions.json()
        : { error: 'An error occurred making the request' }
}
