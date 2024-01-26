import { useSelector } from 'react-redux'
import Router from 'next/router'

import { createCookie } from '../../utils/localStorageFunctions'
import styles from './UserView.module.css'
import UserItem from './UserItem'
import UserConsts from './UserConsts'

type ComponentType = {
    manage: boolean
}

const UserView: React.FC<ComponentType> = ({ manage }) => {
    const paymentData = useSelector<any, any>((state) => state.payment)

    const title = manage ? 'Manage Profiles:' : "Who's watching?"
    const buttonLink = manage ? '/profilgate' : '/profile/manage'
    const buttonText = manage ? 'Done' : 'Manage profiles'

    const chosenUser = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const anchorElement = e.currentTarget as HTMLAnchorElement

        createCookie('chosenUser', anchorElement.id)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            {paymentData ? (
                <ul className={styles.list}>
                    {paymentData.selectedNames.map((user: string) => {
                        if (user === null) return

                        return <UserItem manage={manage} user={user} key={user} onChosenUser={chosenUser} />
                    })}
                    <UserConsts onChosenUser={chosenUser} manage={manage} />
                </ul>
            ) : (
                <p className={styles.loading}>Loading data...</p>
            )}
            <button
                type="button"
                aria-label="Manage profiles button"
                className={styles.submitBtn}
                onClick={() => Router.push(buttonLink)}
            >
                {buttonText}
            </button>
        </div>
    )
}

export default UserView
