import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const WithoutAuth = () => {
    const isLoggedIn = useSelector<any, any>((state) => state.isLoggedIn)
    const router = useRouter()

    useEffect(() => {
        if (isLoggedIn === 'false' || isLoggedIn === null || isLoggedIn === false) {
            router.push('/')
        } else {
            return
        }
    }, [isLoggedIn])
    return <></>
}

export default WithoutAuth
