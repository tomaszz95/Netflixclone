import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import SingleProfileManage from '../../../../components/profile/editProfile/SingleProfileManage'

import WithoutAuth from '../../../../components/layouts/WithoutAuth'
import ReactProviderCookiesData from '../../../../helpers/ReactProviderCookiesData'

const ManageProfileSite = () => {
    const [queryRouter, setQueryRouter] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (typeof router.query.profileName === 'string') {
            setQueryRouter(router.query.profileName)
        }
    }, [router.query.profileName])

    return (
        <>
            <Head>
                <title>{router.query.profileName} Profile | Netflix</title>
                <meta name="description" content={`${router.query.profileName} Profile page`} />
            </Head>

            <ReactProviderCookiesData>
                <WithoutAuth />
                <SingleProfileManage profilName={queryRouter} />
            </ReactProviderCookiesData>
        </>
    )
}

export default ManageProfileSite
