import AddProfileView from '../../components/profile/AddProfileView'

import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../components/layouts/WithoutAuth'

const AddProfileSite = () => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <AddProfileView />
        </ReactProviderCookiesData>
    )
}

export default AddProfileSite
