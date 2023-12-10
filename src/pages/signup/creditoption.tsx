import SignupLayout from '../../components/layouts/SignupLayout'
import CreditOptionView from '../../components/payOptions/CreditOptionView'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const PaymentPickerPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <CreditOptionView />
        </SignupLayout>
    )
}

export default PaymentPickerPage
