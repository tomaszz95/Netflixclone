import SignupLayout from '../../components/layouts/SignupLayout'
import PaymentPickerView from '../../components/signup/PaymentPickerView'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const PaymentPickerPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <PaymentPickerView />
        </SignupLayout>
    )
}

export default PaymentPickerPage
