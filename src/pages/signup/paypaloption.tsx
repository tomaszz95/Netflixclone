import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/withoutAuth'
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
