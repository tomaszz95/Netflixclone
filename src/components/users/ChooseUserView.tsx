import { useSelector } from 'react-redux'
import Router from 'next/router'

import { createCookie } from '../utils/localStorageFunctions'
import styles from './ChooseUserView.module.css'
import ChooseUserItem from './ChooseUserItem'
import ChooseUserConsts from './ChooseUserConsts'

const ChooseUserView = () => {
    const paymentData = useSelector<any, any>((state) => state.payment)

    const chosenUser = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const anchorElement = e.currentTarget as HTMLAnchorElement

        createCookie('chosenUser', anchorElement.id)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Who's watching?</h1>
            {paymentData ? (
                <ul className={styles.list}>
                    {paymentData.selectedNames.map((user: string) => {
                        if (user === null) return

                        return <ChooseUserItem user={user} key={user} onChosenUser={chosenUser} />
                    })}
                    <ChooseUserConsts onChosenUser={chosenUser} />
                </ul>
            ) : (
                <p className={styles.loading}>Loading data...</p>
            )}
            <button
                type="button"
                aria-label="Manage profiles button"
                className={styles.submitBtn}
                onClick={() => Router.push('/profile/manage')}
            >
                Manage profiles
            </button>
        </div>
    )
}

export default ChooseUserView
