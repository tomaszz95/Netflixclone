import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from 'next/router'

import NETFLIX_LOGO from '../../assets/photos/netflixLogo.png'
import LoginFooter from '../login/LoginFooter'

import ReactProviderCookiesData from '../../helpers/ReactProviderCookiesData'
import styles from './LogLayout.module.css'

type ChildrenLayoutType = {
    children: React.ReactNode
}

const LogLayout: React.FC<ChildrenLayoutType> = ({ children }) => {
    const [isLoginPage, setIsLoginPage] = useState(false)
    const router = useRouter()
    const isLoggedIn = useSelector<any, any>((state) => state.isLoggedIn)
    const paymentData = useSelector<any, any>((state) => state.payment)

    useEffect(() => {
        if (isLoggedIn === 'true' && paymentData !== null && paymentData.isFullySet) {
            Router.push('/profilgate')
        }

        if (router.pathname === '/login') {
            setIsLoginPage(true)
        }
    }, [isLoggedIn])

    return (
        <ReactProviderCookiesData>
            <div className={`${styles.loginBox} ${isLoginPage ? styles.loginBg : styles.logoutBg}`}>
                <section className={styles.login}>
                    <div className={styles.content}>
                        <Link href="/">
                            <Image
                                src={NETFLIX_LOGO}
                                alt="Netflix Logo icon"
                                width="120"
                                className={styles.netflixLogo}
                            />
                        </Link>
                        {isLoginPage ? (
                            <></>
                        ) : (
                            <Link href="/login" className={styles.loginLink}>
                                Sign In
                            </Link>
                        )}
                    </div>
                    {children}
                </section>
                <LoginFooter isLoginPage={isLoginPage} />
            </div>
        </ReactProviderCookiesData>
    )
}

export default LogLayout
