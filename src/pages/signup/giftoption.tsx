import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/WithoutAuth'
import GiftView from '../../components/payOptions/GiftView'

const GiftOptionPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <GiftView />
        </SignupLayout>
    )
}

export default GiftOptionPage
