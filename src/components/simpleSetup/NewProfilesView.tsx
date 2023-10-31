import NewProfileInput from './NewProfilesInput'

import styles from './NewProfilesView.module.css'

const NewProfilesView = () => {
    const submitData = () => {
        console.log('ta')
    }

    return (
        <div className={styles.container}>
            <div className={styles.textBox}>
                <span className={styles.step}>Step 2 of 4</span>
                <h1 className={styles.title}>Who will be watching Netflix?</h1>
                <ul className={styles.list}>
                    Add a profile for up to 5 people you live with to get:
                    <li className={styles.listItem}>Personalized recommendations</li>
                    <li className={styles.listItem}>Different settings for whoever is watching</li>
                    <li className={styles.listItem}>An experience tailored to each individual</li>
                </ul>
            </div>
            <div className={styles.inputContent}>
                <div className={styles.inputOwner}>
                    <span className={styles.inputTitle}>Your profile</span>
                    <NewProfileInput id="ownerInput" icon="lala" />
                </div>
                <div className={styles.inputAdditional}>
                    <span className={styles.inputTitle}>Add profiles?</span>
                    <NewProfileInput id="personInput1" icon="lala" />
                    <NewProfileInput id="personInput2" icon="lala" />
                    <NewProfileInput id="personInput3" icon="lala" />
                    <NewProfileInput id="personInput4" icon="lala" />
                </div>
            </div>
            <p className={styles.warning}>Only people who live with you may use your account.</p>
            <button
                type="submit"
                aria-label="Go next after choosing people"
                className={styles.submitBtn}
                onClick={submitData}
            >
                Next
            </button>
        </div>
    )
}

export default NewProfilesView
