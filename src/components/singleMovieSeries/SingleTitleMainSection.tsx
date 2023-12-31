import SingleMainCrew from './main/SingleMainCrew'
import SingleMainHero from './main/SingleMainHero'
import SingleMainSeries from './main/SingleMainSeries'
import SingleMainSimilar from './main/SingleMainSimilar'

const SingleTitleMainSection = ({ fetchedData }: any) => {
    return (
        <>
            <SingleMainHero fetchedDataInfo={fetchedData.singleItem} />
            {fetchedData.singleItem.type === 'series' && (
                <SingleMainSeries seasonsInfo={fetchedData.singleItem.seasons} title={fetchedData.singleItem.title} />
            )}
            <SingleMainCrew
                crewData={fetchedData.crewData}
                seriesCreator={fetchedData.singleItem.type === 'series' ? fetchedData.singleItem.createdBy : ''}
                genres={fetchedData.singleItem.genres}
            />
            <SingleMainSimilar similar={fetchedData.similar} title={fetchedData.singleItem.title} />
        </>
    )
}

export default SingleTitleMainSection
