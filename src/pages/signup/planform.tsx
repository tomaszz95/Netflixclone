import PlanFormView from '../../components/signup/PlanFormView'
import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/withoutAuth'

const PlanPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <PlanFormView />
        </SignupLayout>
    )
}

export default PlanPage
