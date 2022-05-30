export const convertToSnakeCase = (string: string) => {
    return string
        .replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map((word: string) => word.toLowerCase())
        .join('_')
}

export const convertBackToLabel = (string: string) => {
    const label_string = string.replace('_', ' ')
    return label_string.charAt(0).toUpperCase() + label_string.slice(1)
}
