import { fetchedMainWholeObj } from '../../components/helpers/types'

import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'
import { getAllAPIFetchedData } from '../api/mainSite'

const BrowsePage: React.FC<fetchedMainWholeObj> = ({ fetchedData }) => {
    return (
        <ReactProviderCookiesData>
            <LoggedMainSiteView fetchedData={fetchedData} />
        </ReactProviderCookiesData>
    )
}

export default BrowsePage

export async function getStaticProps() {
    const fetchedData = await getAllAPIFetchedData()

    return {
        props: {
            fetchedData,
        },
    }
}
