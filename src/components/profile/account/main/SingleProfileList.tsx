import { singleProfileKidsMoreInfoTexts, singleProfileMoreInfoTexts } from '../../../../constans/editProfile'
import styles from './SingleProfileList.module.css'
import SingleProfileMoreInfo from './SingleProfileMoreInfo'

type ComponentType = {
    profilName: string
}

const SingleProfileList: React.FC<ComponentType> = ({ profilName }) => {
    return (
        <div className={styles.moreInfo}>
            {profilName === 'kids'
                ? singleProfileKidsMoreInfoTexts.map((prop) => {
                      return (
                          <SingleProfileMoreInfo
                              key={prop.moreInfoProperty}
                              moreInfoProperty={prop.moreInfoProperty}
                              moreInfoText={prop.moreInfoText}
                              moreInfoLink={prop.moreInfoLink}
                          />
                      )
                  })
                : singleProfileMoreInfoTexts.map((prop) => (
                      <SingleProfileMoreInfo
                          key={prop.moreInfoProperty}
                          moreInfoProperty={prop.moreInfoProperty}
                          moreInfoText={prop.moreInfoText}
                          moreInfoLink={prop.moreInfoLink}
                      />
                  ))}
            <div className={styles.moreInfoBoxInfo}>
                <input type="checkbox" className={styles.moreInfoBoxInput} />
                <label className={styles.moreInfoBoxText}>Reduce animation effect when navigating on TV.</label>
            </div>
        </div>
    )
}

export default SingleProfileList
