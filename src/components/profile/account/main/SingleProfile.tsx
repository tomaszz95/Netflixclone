import { useState } from 'react'

import EditProfileImage from '../../editProfile/EditProfileImage'
import SingleProfileMoreInfo from './SingleProfileMoreInfo'

import { capitalizeFirstLetter } from '../../../utils/helpersFunctions'
import { singleProfileMoreInfoTexts, singleProfileKidsMoreInfoTexts } from '../../../../constans/siteText'
import styles from './SingleProfile.module.css'

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
                    className={`${styles.profilArrow} ${moreInfoVisible ? styles.active : ''}`}
                    onClick={() => setMoreInfoVisible(!moreInfoVisible)}
                >
                    <span className={styles.profilArrowIcon}>&gt;</span>
                </button>
            </div>
            {moreInfoVisible && (
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
            )}
        </>
    )
}

export default SingleProfile
