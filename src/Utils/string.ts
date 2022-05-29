export const convertToSnakeCase = (string: string) => {
    return string
        .replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map((word: string) => word.toLowerCase())
        .join('_')
}
