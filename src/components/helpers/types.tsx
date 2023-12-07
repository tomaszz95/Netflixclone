export type sectionMainData = {
    title: string
    text: string
    image: string
    video?: string
}

export type sectionMainDataObj = {
    [key: string]: sectionMainData
}

export type fetchedContentType = {
    moviesData: fullMoviesDataType
    seriesData: fullSeriesDataType
}

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

export type heroMoviesFetchedData = {
    posterPath: string
    movieTitle: string
    movieOverview: string
    movieId: number
    type: string
}

export type fetchedMainSingleObj = {
    posterPath: string
    movieTitle: string
    movieId: number
    movieVote: number
    moviePopularity: number
    type: string
}

export type fetchedMainWholeObj = { [key: string]: fetchedMainSingleObj[] }

export type singleMovieFetchedDataType = {}

export type singleSeriesFetchedDataType = {
    crewData: { actors: string[] }
    similar: fetchedMainSingleObj[]
    singleItem: singleSeriesItem
}

export type singleSeriesItem = {
    createdBy: string[]
    firstReleaseData: string
    genres: string[]
    heroImagePath: string
    heroImagePath2: string
    id: number
    lastReleaseData: string
    numberOfEpisodes: number
    numberOfSeasons: number
    overview: string
    tagline: string
    title: string
    type: string
    seasons: [
        {
            air_date: string
            episode_count: number
            name: string
            overview: string
            poster_path: string
            season_number: number
        },
    ]
}

export type singleMoviesFetchedDataType = {
    crewData: { actors: string[]; crew: { name: string; role: string } }
    similar: fetchedMainSingleObj[]
    singleItem: singleSeriesItem
}

export type singleMoviesItem = {
    genres: string[]
    heroImagePath: string
    heroImagePath2: string
    id: number
    overview: string
    releaseData: string
    runtime: number
    tagline: string
    title: string
    type: string
}