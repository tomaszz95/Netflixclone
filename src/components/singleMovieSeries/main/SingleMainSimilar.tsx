import { fetchedMainSingleObj } from '../../helpers/types'
import styles from './SingleMainSimilar.module.css'

type ComponentType = {
    similar: fetchedMainSingleObj[]
}

const SingleMainSimilar: React.FC<ComponentType> = ({ similar }) => {
    return <div>SingleMainSimilar</div>
}

export default SingleMainSimilar
