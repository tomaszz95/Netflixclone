import SignupLayout from '../../components/layouts/SignupLayout'
import MobileView from '../../components/payOptions/MobileView'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const DbcoptionPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <MobileView />
        </SignupLayout>
    )
}

export default DbcoptionPage
