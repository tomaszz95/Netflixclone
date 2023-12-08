import { seasonsDataType } from '../../helpers/types'
import styles from './SingleMainSeries.module.css'

type ComponentType = {
    seasonsInfo: seasonsDataType[]
}

const SingleMainSeries: React.FC<ComponentType> = ({ seasonsInfo }) => {
    return <div>SingleMainSeries</div>
}

export default SingleMainSeries
