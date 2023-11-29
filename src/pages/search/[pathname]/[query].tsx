import { useState, useEffect } from 'react'
import { fetchedMainSingleObj } from '../../../components/helpers/types'
import ReactProviderCookiesData from '../../../components/helpers/ReactProviderCookiesData'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import SearchPageView from '../../../components/search/SearchPageView'
import { searchByInput } from '../../api/searchByInput'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { pathnameActions } from '../../../components/store/pathname'
import { getCookie } from '../../../components/helpers/localStorageFunctions'

type ComponentType = {
    searchedMovies: fetchedMainSingleObj[]
}

const SearchPage: React.FC<ComponentType> = () => {
    const router = useRouter()
    const [searchedData, setSearchedData] = useState<fetchedMainSingleObj[]>([])
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const [chosenUser, setChosenUser] = useState('')

    useEffect(() => {
        const cookiesUser = getCookie('chosenUser')
        cookiesUser ? setChosenUser(cookiesUser) : setChosenUser('')

        if (router.query.pathname === 'browse') {
            dispatch(pathnameActions.createPathname('browse'))
        } else if (router.query.pathname === 'kids') {
            dispatch(pathnameActions.createPathname('kids'))
        } else if (router.query.pathname === 'tvshows') {
            dispatch(pathnameActions.createPathname('tvshows'))
        } else if (router.query.pathname === 'movies') {
            dispatch(pathnameActions.createPathname('movies'))
        }
    }, [router.query.pathname])

    const fetchData = async (query: string, pathname: string) => {
        try {
            const fetchedData = await searchByInput(query, pathname, chosenUser)
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
