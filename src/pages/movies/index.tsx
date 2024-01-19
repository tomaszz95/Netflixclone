import Head from 'next/head'

import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'

import { getAllAPIFetchedDataMovies } from '../api/fetchMainSitesApiData'
import ReactProviderCookiesData from '../../helpers/ReactProviderCookiesData'
import { fetchedMainWholeObj } from '../../types/types'
import WithoutAuth from '../../components/layouts/WithoutAuth'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const MoviesPage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <>
            <Head>
                <title>Movie list | Netflix</title>
                <meta name="description" content="Movie list page" />
            </Head>
            <ReactProviderCookiesData>
                <WithoutAuth />
                <LoggedMainSiteView fetchedData={fetchedData} />
            </ReactProviderCookiesData>
        </>
    )
}

export default MoviesPage

export async function getStaticProps() {
    const fetchedData = await getAllAPIFetchedDataMovies()
    return {
        props: {
            fetchedData,
        },
        revalidate: 21600,
    }
}
