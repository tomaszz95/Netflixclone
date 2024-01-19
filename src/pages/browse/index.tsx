import Head from 'next/head'

import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'

import { getAllAPIFetchedData } from '../api/fetchMainSitesApiData'
import { fetchedMainWholeObj } from '../../types/types'
import ReactProviderCookiesData from '../../helpers/ReactProviderCookiesData'
import WithoutAuth from '../../components/layouts/WithoutAuth'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const BrowsePage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <>
            <Head>
                <title>Home | Netflix</title>
                <meta name="description" content="Home page" />
            </Head>
            <ReactProviderCookiesData>
                <WithoutAuth />
                <LoggedMainSiteView fetchedData={fetchedData} />
            </ReactProviderCookiesData>
        </>
    )
}

export default BrowsePage

export async function getStaticProps() {
    const fetchedData = await getAllAPIFetchedData()

    return {
        props: {
            fetchedData,
        },
        revalidate: 21600,
    }
}
