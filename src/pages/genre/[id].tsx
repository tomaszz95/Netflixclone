import { useEffect, useState } from 'react'

import SingleGenreView from '../../components/singleGenre/SingleGenreView'

import getGenreData from '../api/fetchSingleGenreData'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import { fetchedMainSingleObj } from '../../components/helpers/types'
import { allFetchedGenres } from '../../components/helpers/siteText'
import WithoutAuth from '../../components/layouts/WithoutAuth'

type ComponentType = {
    fetchedData: fetchedMainSingleObj[]
}

const SingleGenrePage: React.FC<ComponentType> = ({ fetchedData }) => {
    const [sortedData, setSortedData] = useState<fetchedMainSingleObj[]>([])

    useEffect(() => {
        const sortedMovies = fetchedData.sort((a, b) => b.moviePopularity - a.moviePopularity)
        setSortedData(sortedMovies)
    })

    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <SingleGenreView fetchedData={sortedData} />
        </ReactProviderCookiesData>
    )
}

export default SingleGenrePage

export const getStaticPaths = async () => {
    const paths = allFetchedGenres.map((genre) => ({
        params: { id: genre.id.toString() },
    }))

    return {
        paths,
        fallback: false,
    }
}

type GetStaticPropsContext = {
    params: {
        id: string
    }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context
    const id = params.id
    const fetchedData = await getGenreData(id)

    return {
        props: {
            fetchedData,
        },
    }
}
