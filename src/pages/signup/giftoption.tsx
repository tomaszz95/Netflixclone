import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/withoutAuth'
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
