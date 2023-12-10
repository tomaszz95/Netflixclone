import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'

import { getAllAPIFetchedDataMovies } from '../api/fetchMainSitesApiData'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import { fetchedMainWholeObj } from '../../components/helpers/types'
import WithoutAuth from '../../components/layouts/WithoutAuth'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const MoviesPage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <LoggedMainSiteView fetchedData={fetchedData} />
        </ReactProviderCookiesData>
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
