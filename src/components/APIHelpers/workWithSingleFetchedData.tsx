export const movieFullSingleData = (movieData: any) => {
    const title = movieData.original_title
    const heroImagePath = movieData.backdrop_path
    const id = movieData.id
    const overview = movieData.overview
    const genres = movieData.genres.map((genre: any) => genre.name)
    const releaseData = movieData.release_date.slice(0, 4)
    const runtime = movieData.runtime
    const tagline = movieData.tagline
    const type = 'movie'

    const movieFilteredData = { title, heroImagePath, id, overview, genres, releaseData, runtime, tagline, type }

    return movieFilteredData
}

export const movieCrewSingleData = (movieData: any) => {
    const maxEntries = 20
    const actorNamesTable = movieData.cast.slice(0, maxEntries).map((item: any) => item.name)

    const isDirector = movieData.crew.find((member: any) => member.job === 'Director')
    const isProducer = movieData.crew.find((member: any) => member.job === 'Producer')

    let crewMember
    if (isDirector) {
        crewMember = { role: 'Director', name: isDirector.original_name }
    } else if (isProducer) {
        crewMember = { role: 'Producer', name: isProducer.original_name }
    } else {
        crewMember = { role: '', name: '' }
    }

    const movieFilteredData = {
        actors: actorNamesTable,
        crew: crewMember,
    }

    return movieFilteredData
}

export const seriesFullSingleData = (seriesData: fullSeriesDataType) => {
    let seriesArray = []

    for (const key in seriesData.results) {
        if (seriesData.results.hasOwnProperty(key)) {
            const series = seriesData.results[key]
            const posterPath = series.poster_path
            const movieTitle = series.name
            const movieId = series.id
            const movieOverview = series.overview
            const type = 'series'

            seriesArray.push({ posterPath, movieTitle, movieId, movieOverview, type })
        }
    }

    return seriesArray
}
