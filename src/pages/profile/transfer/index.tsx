import TransferProfileView from '../../../components/profile/transferProfile/TransferProfileView'

import ReactProviderCookiesData from '../../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../../components/layouts/WithoutAuth'

const TransferProfileSite = () => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <TransferProfileView />
        </ReactProviderCookiesData>
    )
}

export default TransferProfileSite
