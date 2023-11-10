import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/withoutAuth'
import CreditOptionView from '../../components/payOptions/CreditOptionView'

const PaymentPickerPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <CreditOptionView />
        </SignupLayout>
    )
}

export default PaymentPickerPage
