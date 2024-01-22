import Head from 'next/head'

import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'

import { getAllAPIFetchedDataShows } from '../api/fetchMainSitesApiData'
import ReactProviderCookiesData from '../../components/layouts/ReactProviderCookiesData'
import { fetchedMainWholeObj } from '../../types/types'
import WithoutAuth from '../../components/layouts/WithoutAuth'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const TVShowsPage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <ReactProviderCookiesData>
            <Head>
                <title>Tv shows list | Netflix</title>
                <meta name="description" content="Tv shows netflix list" />
            </Head>
            <WithoutAuth />
            <LoggedMainSiteView fetchedData={fetchedData} />
        </ReactProviderCookiesData>
    )
}

export default TVShowsPage

export async function getStaticProps() {
    const fetchedData = await getAllAPIFetchedDataShows()

    return {
        props: {
            fetchedData,
        },
        revalidate: 21600,
    }
}
