import Link from 'next/link'
import Router from 'next/router'
import { useSelector } from 'react-redux'

import styles from './ChooseUserView.module.css'

const ChooseUserView = () => {
    const paymentData = useSelector<any, any>((state) => state.payment)
   
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Who's watching?</h1>
            {paymentData ? (
                <ul className={styles.list}>
                    {paymentData.selectedNames.map((user: string) => {
                        if (user !== null) {
                            return (
                                <Link href="/browse" key={user} className={styles.listLink}>
                                    <li className={styles.listItem}>
                                        <img
                                            src="https://occ-0-5273-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                                            alt=""
                                        />
                                        <span>{user}</span>
                                    </li>
                                </Link>
                            )
                        }
                    })}
                    <Link href="/kids" className={styles.listLink}>
                        <li className={styles.listItem}>
                            <img
                                src="https://occ-0-5273-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcENEq3AWngawcvIFgivpRF0Wx5gW-LVuNdof8gYEbtGtft04ORrv_UDixUwcbH1PpV3k16HITdmAnDgXwneLsz2WZuyDuHk5Xpb.png?r=f55"
                                alt=""
                            />
                            <span>Kids</span>
                        </li>
                    </Link>
                    <Link href="/profile/addprofile" className={styles.addProfileLink}>
                        <li className={styles.addProfileItem}>
                            <div>
                                <img src="/icons/roundedplusIcon.png" alt="" />
                            </div>
                            <span>Add Profile</span>
                        </li>
                    </Link>
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
            <button
                type="submit"
                aria-label="Manage profiles"
                className={styles.submitBtn}
                onClick={() => Router.push('/manageprofiles')}
            >
                Manage profiles
            </button>
        </div>
    )
}

export default ChooseUserView
