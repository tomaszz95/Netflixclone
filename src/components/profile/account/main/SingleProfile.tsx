import { useState } from 'react'
import { capitalizeFirstLetter } from '../../../helpers/helpersFunctions'
import EditProfileImage from '../../editProfile/EditProfileImage'
import styles from './SingleProfile.module.css'
import SingleProfileMoreInfo from './SingleProfileMoreInfo'
import { singleProfileMoreInfoTexts, singleProfileKidsMoreInfoTexts } from '../../../helpers/siteText'

type ComponentType = {
    profilName: string
}

const SingleProfile: React.FC<ComponentType> = ({ profilName }) => {
    const [moreInfoVisible, setMoreInfoVisible] = useState(false)

    const capitalizedName = capitalizeFirstLetter(profilName)
    return (
        <>
            <div className={styles.profilBox}>
                <EditProfileImage profilName={profilName} />
                <div className={styles.profilInfo}>
                    <span className={styles.profilName}>{capitalizedName}</span>
                    <p className={styles.profilRate}>
                        {profilName === 'kids' ? '10+ and below' : 'All Maturity Ratings'}
                    </p>
                </div>
                <button
                    aria-label="Click to show more info about profile box"
                    className={styles.profilArrow}
                    onClick={() => setMoreInfoVisible(!moreInfoVisible)}
                >
                    &gt;
                </button>
            </div>
            {moreInfoVisible && (
                <div className={styles.moreInfo}>
                    {profilName === 'kids'
                        ? singleProfileKidsMoreInfoTexts.map((prop) => {
                              console.log(prop)
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
                        <input type="checkbox" className={styles.moreInfoBoxProperty} />
                        <label className={styles.moreInfoBoxText}>Reduce animation effect when navigating on TV.</label>
                    </div>
                </div>
            )}
        </>
    )
}

export default SingleProfile