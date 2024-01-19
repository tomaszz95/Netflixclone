export const movieFullSingleData = (movieData: any) => {
    const title = movieData.original_title
    const heroImagePath = movieData.backdrop_path
    const heroImagePath2 = movieData.poster_path
    const id = movieData.id
    const overview = movieData.overview
    const genres = movieData.genres.map((genre: any) => genre.name)
    const releaseData = movieData.release_date.slice(0, 4)
    const runtime = movieData.runtime
    const type = 'movie'

    const movieFilteredData = {
        title,
        heroImagePath,
        heroImagePath2,
        id,
        overview,
        genres,
        releaseData,
        runtime,
        type,
    }

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

export const seriesFullSingleData = (seriesData: any) => {
    const title = seriesData.original_name
    const heroImagePath = seriesData.backdrop_path
    const heroImagePath2 = seriesData.poster_path
    const id = seriesData.id
    let createdBy
    if (seriesData.created_by.length > 0) {
        createdBy = seriesData.created_by[0].name
    } else {
        createdBy = ''
    }

    const overview = seriesData.overview
    const genres = seriesData.genres.map((genre: any) => genre.name)
    const firstReleaseData = seriesData.first_air_date.slice(0, 4)
    const lastReleaseData = seriesData.last_air_date.slice(0, 4)
    const numberOfEpisodes = seriesData.number_of_episodes
    const numberOfSeasons = seriesData.number_of_seasons
    const seasons = seriesData.seasons
        .map((season: any) => {
            if (season.name.includes('Season') && season.name !== 'Specials') {
                if (season.air_date === null) return
                return {
                    air_date: season.air_date.slice(0, 4),
                    episode_count: season.episode_count,
                    name: season.name,
                    overview: season.overview,
                    poster_path: season.poster_path,
                    season_number: season.season_number,
                }
            }
            return null
        })
        .filter(Boolean)
    const type = 'series'

    const seriesFilteredData = {
        title,
        heroImagePath,
        heroImagePath2,
        id,
        createdBy,
        overview,
        genres,
        firstReleaseData,
        lastReleaseData,
        numberOfEpisodes,
        numberOfSeasons,
        seasons,
        type,
    }

    return seriesFilteredData
}

export const seriesCrewSingleData = (seriesData: any) => {
    const maxEntries = 20
    const actorNamesTable = seriesData.cast.slice(0, maxEntries).map((item: any) => item.name)

    const seriesFilteredData = {
        actors: actorNamesTable,
    }

    return seriesFilteredData
}
