import { changingLanguage } from '../../helpers/dummyActionFunctions'
import styles from './SelectLanguage.module.css'

type ComponentType = { style: string }

const SelectLanguage: React.FC<ComponentType> = ({ style }) => {
    const selectClasses = `${styles.select} ${style === 'white' ? styles.white : ''}`

    return (
        <select name="language" className={selectClasses} onChange={changingLanguage} defaultValue="English">
            <option value="Polish">Polish</option>
            <option value="English">English</option>
        </select>
    )
}

export default SelectLanguage
