import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import { fetchSingleData } from '../api/fetchSingleItem'

const SingleTitlePage = () => {
    const router = useRouter()
    const [searchedData, setSearchedData] = useState()

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

    console.log(searchedData)

    return <ReactProviderCookiesData>s</ReactProviderCookiesData>
}

export default SingleTitlePage
