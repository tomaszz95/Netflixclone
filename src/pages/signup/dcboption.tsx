import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/WithoutAuth'
import MobileView from '../../components/payOptions/MobileView'

const DbcoptionPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <MobileView />
        </SignupLayout>
    )
}

export default DbcoptionPage
