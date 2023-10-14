import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import auth from '../../../firebase'

export const useCheckIfUserIsLogged = () => {
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user === null) {
                setIsLogged(false)
            } else {
                setIsLogged(true)
            }
        })
    }, [])

    return isLogged
}
