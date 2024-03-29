export type fullMoviesDataType = {
    page: number
    results: moviesDataType[]
    total_pages: number
    total_results: number
}

export type fullSeriesDataType = {
    page: number
    results: seriesDataType[]
    total_pages: number
    total_results: number
}

export type moviesDataType = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type seriesDataType = {
    adult: boolean
    backdrop_path: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

export type fetchedMoviesPropsData = { posterPath: string; movieTitle: string }
