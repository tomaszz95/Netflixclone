import { useState, useEffect } from 'react'
import { fetchedMainSingleObj } from '../../../components/helpers/types'
import ReactProviderCookiesData from '../../../components/helpers/ReactProviderCookiesData'
import SearchPageView from '../../../components/search/SearchPageView'
import { searchByInput } from '../../api/searchByInput'
import _ from 'lodash'
import { useRouter } from 'next/router'

type ComponentType = {
    searchedMovies: fetchedMainSingleObj[]
}

const SearchPage: React.FC<ComponentType> = () => {
    const router = useRouter()
    const [searchedData, setSearchedData] = useState<fetchedMainSingleObj[]>([])

    const fetchData = async (query: string, pathname: string) => {
        try {
            const fetchedData = await searchByInput(query, pathname)
            if (fetchedData !== undefined) {
                const sortedData = fetchedData.sort((a, b) => b.moviePopularity - a.moviePopularity)
                setSearchedData(sortedData)
            }
        } catch (error) {
            console.error('Data fetching failed:', error)
        }
    }

    const debouncedSearch = _.debounce((query: string, pathname: string) => {
        fetchData(query, pathname)
    }, 500)

    useEffect(() => {
        const query = typeof router.query.query === 'string' ? router.query.query : ''
        const pathname = typeof router.query.pathname === 'string' ? router.query.pathname : ''

        if (query === '' || pathname === '') {
            fetchData('', '')
        } else {
            debouncedSearch(query, pathname)
        }
    }, [router.query])

    return (
        <ReactProviderCookiesData>
            <SearchPageView fetchedData={searchedData} />
        </ReactProviderCookiesData>
    )
}

export default SearchPage
