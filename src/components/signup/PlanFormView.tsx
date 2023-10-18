import Router from 'next/router'

import PlanFormOffer from './PlanFormOffer'
import PlanFormTable from './PlanFormTable'

import styles from './PlanFormView.module.css'

const PlanFormView = () => {
    return (
        <div className={styles.container}>
            <PlanFormOffer />
            <PlanFormTable />
            <div className={styles.textBox}>
                <p>
                    HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and
                    device capabilities. Not all content is available in all resolutions. See our{' '}
                    <a href="#">Terms of Use</a> for more details.
                </p>
                <p>
                    Only people who live with you may use your account. Watch on 4 different devices at the same time
                    with Premium, 2 with Standard and 1 with Basic.
                </p>
                <button
                    type="submit"
                    aria-label="Next step"
                    className={styles.button}
                    onClick={() => Router.push(`/signup/planform`)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default PlanFormView
