import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import ReactProviderCookiesData from '../helpers/ReactProviderCookiesData'
import LoginFooter from '../login/LoginFooter'

import styles from './LogLayout.module.css'

type ChildrenLayoutType = {
    children: React.ReactNode
}

const LogLayout: React.FC<ChildrenLayoutType> = ({ children }) => {
    const [isLoginPage, setIsLoginPage] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (router.pathname === '/login') {
            setIsLoginPage(true)
        }
    }, [])

    return (
        <ReactProviderCookiesData>
            <div className={`${styles.loginBox} ${isLoginPage ? styles.loginBg : styles.logoutBg}`}>
                <section className={styles.login}>
                    <div className={styles.content}>
                        <Link href="/">
                            <Image
                                src="/photos/netflixLogo.png"
                                alt="Netflix Logo"
                                width="100"
                                height="40"
                                priority={true}
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
