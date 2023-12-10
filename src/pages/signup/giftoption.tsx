import SignupLayout from '../../components/layouts/SignupLayout'
import GiftView from '../../components/payOptions/GiftView'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const GiftOptionPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <GiftView />
        </SignupLayout>
    )
}

export default GiftOptionPage
