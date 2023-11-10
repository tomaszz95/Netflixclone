import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/WithoutAuth'
import PaymentPickerView from '../../components/signup/PaymentPickerView'

const PaymentPickerPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <PaymentPickerView />
        </SignupLayout>
    )
}

export default PaymentPickerPage
