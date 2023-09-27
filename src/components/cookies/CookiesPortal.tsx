import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const CookiesPortal = ({ children }: any) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])

    if (!mounted) {
        return null
    }

    const portalDiv = document.getElementById('cookiesModal') as HTMLElement

    return createPortal(children, portalDiv)
}

export default CookiesPortal
