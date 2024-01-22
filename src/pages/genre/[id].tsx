import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import SingleGenreView from '../../components/singleGenre/SingleGenreView'

import getGenreData from '../api/fetchSingleGenreData'
import ReactProviderCookiesData from '../../components/layouts/ReactProviderCookiesData'
import { fetchedMainSingleObj } from '../../types/types'
import { allFetchedGenres } from '../../constans/siteText'
import WithoutAuth from '../../components/layouts/WithoutAuth'
import { getGenreName } from '../../components/utils/helpersFunctions'

type ComponentType = {
    fetchedData: fetchedMainSingleObj[]
}

const SingleGenrePage: React.FC<ComponentType> = ({ fetchedData }) => {
    const [sortedData, setSortedData] = useState<fetchedMainSingleObj[]>([])
    const router = useRouter()
    const genreName = getGenreName(router.query.id)

    useEffect(() => {
        const sortedMovies = fetchedData.sort((a, b) => b.moviePopularity - a.moviePopularity)
        setSortedData(sortedMovies)
    })

    return (
        <>
            <Head>
                <title>{genreName} Titles | Netflix</title>
                <meta name="description" content={`${genreName} Genre Titles page`} />
            </Head>
            <ReactProviderCookiesData>
                <WithoutAuth />
                <SingleGenreView fetchedData={sortedData} />
            </ReactProviderCookiesData>
        </>
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
