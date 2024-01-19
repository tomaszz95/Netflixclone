import Head from 'next/head'

import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'

import { getAllKidsAPIFetchedData } from '../api/fetchMainSitesApiData'
import ReactProviderCookiesData from '../../helpers/ReactProviderCookiesData'
import { fetchedMainWholeObj } from '../../types/types'
import WithoutAuth from '../../components/layouts/WithoutAuth'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const KidsPage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <>
            <Head>
                <title>Home Kids | Netflix</title>
                <meta name="description" content="Home Kids page" />
            </Head>
            <ReactProviderCookiesData>
                <WithoutAuth />
                <LoggedMainSiteView fetchedData={fetchedData} />
            </ReactProviderCookiesData>
        </>
    )
}

export default KidsPage

export async function getStaticProps() {
    const fetchedData = await getAllKidsAPIFetchedData()

    return {
        props: {
            fetchedData,
        },
        revalidate: 21600,
    }
}
