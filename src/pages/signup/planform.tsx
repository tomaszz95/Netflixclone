import PlanFormView from '../../components/signup/PlanFormView'
import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/WithoutAuth'

const PlanPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <PlanFormView />
        </SignupLayout>
    )
}

export default PlanPage
