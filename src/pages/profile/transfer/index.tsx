import ReactProviderCookiesData from '../../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../../components/layouts/WithoutAuth'
import TransferProfileView from '../../../components/profile/transferProfile/TransferProfileView'

const TransferProfileSite = () => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <TransferProfileView />
        </ReactProviderCookiesData>
    )
}

export default TransferProfileSite
