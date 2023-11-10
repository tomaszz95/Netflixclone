import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/WithoutAuth'
import PaypalView from '../../components/payOptions/PaypalView'

const PaypalPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <PaypalView />
        </SignupLayout>
    )
}

export default PaypalPage
