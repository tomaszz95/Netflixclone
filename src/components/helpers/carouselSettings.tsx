import { allFetchedGenres } from './siteText'

export const carouselSettings = {
    dots: false,
    slidesToShow: 6,
    initialSlide: 0,
    slidesToScroll: 4,
    adaptiveHeight: true,
    swipeToSlide: false,
    arrows: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                infinite: false,
                arrows: false,
                slidesToShow: 5,
                swipeToSlide: true,
            },
        },
        {
            breakpoint: 992,
            settings: {
                infinite: false,
                arrows: false,
                slidesToShow: 4,
                swipeToSlide: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                infinite: false,
                arrows: false,
                slidesToShow: 3,
                swipeToSlide: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                infinite: false,
                arrows: false,
                slidesToShow: 2,
                swipeToSlide: true,
            },
        },
    ],
}

export const getCategoryLink = (category: string) => {
    const foundCategory = allFetchedGenres.find((item) => item.name === category)

    if (foundCategory) {
        const id = foundCategory.id
        return id
    } else {
        const id =
            category.toLowerCase().charAt(0).toLowerCase() +
            category
                .slice(1)
                .replace(/\s\w/g, (match: string) => match.toUpperCase())
                .replace(/\s/g, '')
        return id
    }
}
