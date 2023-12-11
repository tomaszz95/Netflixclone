import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import DeleteProfileView from '../../../../components/profile/editProfile/DeleteProfileView'

import ReactProviderCookiesData from '../../../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../../../components/layouts/WithoutAuth'

const DeleteProfileSite = () => {
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
                <title>Delete Profile | Netflix</title>
                <meta name="description" content="Delete Profile page" />
            </Head>
            <ReactProviderCookiesData>
                <WithoutAuth />
                <DeleteProfileView profilName={queryRouter} />
            </ReactProviderCookiesData>
        </>
    )
}

export default DeleteProfileSite
