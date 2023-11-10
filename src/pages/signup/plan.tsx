import PlanView from '../../components/signup/PlanView'
import SignupLayout from '../../components/layouts/SignupLayout'
import WithoutAuth from '../../components/layouts/withoutAuth'

const PlanPage = () => {
    return (
        <SignupLayout>
            <WithoutAuth />
            <PlanView />
        </SignupLayout>
    )
}

export default PlanPage
