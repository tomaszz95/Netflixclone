import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import ReactProviderCookiesData from '../../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../../components/layouts/WithoutAuth'
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
            <WithoutAuth />
            <SingleProfileManage profilName={queryRouter} />
        </ReactProviderCookiesData>
    )
}

export default ManageProfileSite
