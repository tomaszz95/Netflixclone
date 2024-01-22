import { allFetchedGenres } from '../../constans/siteText'

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

export const capitalizeFirstLetter = (text: string) => {
    if (!text) return ''

    return text.charAt(0).toUpperCase() + text.slice(1)
}

export const limitTextToTwoSentences = (text: string) => {
    const sentences = text.split('. ')
    const truncatedText = sentences.slice(0, 2).join('. ')
    return truncatedText
}

export const getRandomMinutes = () => {
    return Math.floor(Math.random() * 60) + 20
}

export const generateRandomDescription = () => {
    const words = [
        'lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet',
        'consectetur',
        'adipiscing',
        'elit',
        'sed',
        'do',
        'eiusmod',
        'tempor',
        'incididunt',
        'ut',
        'labore',
        'et',
        'dolore',
        'magna',
    ]

    const descriptionLength = Math.floor(Math.random() * 16) + 10
    const randomDescription = Array.from(
        { length: descriptionLength },
        () => words[Math.floor(Math.random() * words.length)],
    )

    let generatedText = randomDescription.join(' ')

    generatedText = generatedText.charAt(0).toUpperCase() + generatedText.slice(1)

    return generatedText
}

export const getGenreName = (id: any) => {
    const genre = allFetchedGenres.find((genre) => genre.id == id)
    const genreName = genre?.name

    return genreName
}
