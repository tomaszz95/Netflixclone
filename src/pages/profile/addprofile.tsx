import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../components/layouts/withoutAuth'
import AddProfileView from '../../components/profile/AddProfileView'

const AddProfileSite = () => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <AddProfileView />
        </ReactProviderCookiesData>
    )
}

export default AddProfileSite
