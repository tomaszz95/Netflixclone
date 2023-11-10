import { useEffect } from 'react'
import Router from 'next/router'
import { useSelector } from 'react-redux'

const WithoutAuth = () => {
    const isLoggedIn = useSelector<any, any>((state) => state.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn === 'false' || isLoggedIn === null || isLoggedIn === false) {
            Router.push('/')
        } else {
            return
        }
    }, [isLoggedIn])
    return <></>
}

export default WithoutAuth
