export const getCurrentMonth = () => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const currentDate = new Date()
    const currentMonth = months[currentDate.getMonth()]
    const currentYear = currentDate.getFullYear()

    return { month: currentMonth, year: currentYear }
}

export const capitalizeFirstLetter = (text:string) => {
    if (!text) return ''

    return text.charAt(0).toUpperCase() + text.slice(1)
}