import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import SingleTitleView from '../../components/singleMovieSeries/SingleTitleView'

import WithoutAuth from '../../components/layouts/WithoutAuth'
import { fetchSingleData } from '../api/fetchSingleItem'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'

const SingleTitlePage = () => {
    const router = useRouter()
    const [searchedData, setSearchedData] = useState<any>(null)

    const fetchData = async (queryType: string, queryId: string) => {
        try {
            const fetchedData = await fetchSingleData(queryType, queryId)

            setSearchedData(fetchedData)
        } catch (error) {
            console.error('Data fetching failed:', error)
        }
    }

    useEffect(() => {
        const queryType = typeof router.query.movieType === 'string' ? router.query.movieType : ''
        const queryId = typeof router.query.movieId === 'string' ? router.query.movieId : ''

        fetchData(queryType, queryId)
    }, [router.query])

    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <SingleTitleView fetchedData={searchedData} />
        </ReactProviderCookiesData>
    )
}

export default SingleTitlePage
