import ReactProviderCookiesData from '../../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../../components/layouts/withoutAuth'
import ManageProfilesView from '../../../components/profile/ManageProfilesView'

const ManageProfileSite = () => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <ManageProfilesView />
        </ReactProviderCookiesData>
    )
}

export default ManageProfileSite
