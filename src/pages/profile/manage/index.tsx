import ManageProfilesView from '../../../components/profile/ManageProfilesView'

import ReactProviderCookiesData from '../../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../../components/layouts/WithoutAuth'

const ManageProfileSite = () => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <ManageProfilesView />
        </ReactProviderCookiesData>
    )
}

export default ManageProfileSite
