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
// __activity_fill_marker__ 2025-12-02 6
// __afill_20260514_1059__
// __afill_20260128_1449__
// __afill_20260408_1951__
