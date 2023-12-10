import SignupLayout from '../../components/layouts/SignupLayout'
import PaypalView from '../../components/payOptions/PaypalView'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const PaypalPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <PaypalView />
        </SignupLayout>
    )
}

export default PaypalPage
