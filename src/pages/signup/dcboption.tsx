import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/withoutAuth'
import MobileView from '../../components/payOptions/MobileView'

const DbcoptionPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth/>
            <MobileView />
        </SignupLayout>
    )
}

export default DbcoptionPage
