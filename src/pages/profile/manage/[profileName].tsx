import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import ReactProviderCookiesData from '../../../components/helpers/ReactProviderCookiesData'
import SingleProfileManage from '../../../components/profile/editProfile/SingleProfileManage'

const ManageProfileSite = () => {
    const [queryRouter, setQueryRouter] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (typeof router.query.profileName === 'string') {
            setQueryRouter(router.query.profileName)
        }
    }, [router.query.profileName])

    return (
        <ReactProviderCookiesData>
            <SingleProfileManage profilName={queryRouter} />
        </ReactProviderCookiesData>
    )
}

export default ManageProfileSite
