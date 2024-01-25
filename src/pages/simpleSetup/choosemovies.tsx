import Head from 'next/head'
import { useEffect, useState } from 'react'

import SignupLayout from '../../components/layouts/SignupLayout/SignupLayout'
import ChooseMoviesView from '../../components/simpleSetup/ChooseMoviesView'
import { simpleSetupFetch } from '../../components/utils/simpleSetupFetch'
import { fixSimpleSetupData } from '../../lib/fixSimpleSetupData'

import { fullMoviesDataType, fullSeriesDataType, fetchedMoviesPropsData } from '../../types/simpleSetupTypes'

type ComponentType = {
    moviesData: fullMoviesDataType
    seriesData: fullSeriesDataType
    error: string
}

const ChooseMoviesPage: React.FC<ComponentType> = ({ moviesData, seriesData, error }) => {
    const [fetchedContentObjects, setfetchedContentObjects] = useState<fetchedMoviesPropsData[]>([])

    useEffect(() => {
        if (error) return

        const fetchedFixedData = fixSimpleSetupData(moviesData, seriesData)

        setfetchedContentObjects(fetchedFixedData)
    }, [])

    return (
        <>
            <Head>
                <title>Choose Movie | Netflix</title>
                <meta name="description" content="Choose your favorite movies and series" />
            </Head>
            <SignupLayout>
                {error ? <p>{error}</p> : <ChooseMoviesView fetchedContent={fetchedContentObjects} />}
            </SignupLayout>
        </>
    )
}

export default ChooseMoviesPage

export async function getStaticProps() {
    const data = await simpleSetupFetch()

    if (data.message) {
        return {
            props: {
                error: data.message,
            },
        }
    }

    return {
        props: {
            moviesData: data.moviesData,
            seriesData: data.seriesData,
        },
    }
}
