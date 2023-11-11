import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import ReactProviderCookiesData from '../../../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../../../components/layouts/WithoutAuth'
import DeleteProfileView from '../../../../components/profile/editProfile/DeleteProfileView'

const DeleteProfileSite = () => {
    const [queryRouter, setQueryRouter] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (typeof router.query.profileName === 'string') {
            setQueryRouter(router.query.profileName)
        }
    }, [router.query.profileName])

    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <DeleteProfileView profilName={queryRouter} />
        </ReactProviderCookiesData>
    )
}

export default DeleteProfileSite
