import { useState } from 'react'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import NewProfileInput from './NewProfilesInput'

import { paymentActions } from '../../store/payment'
import { initialInputNamesValues } from '../../constans/siteText'
import styles from './NewProfilesView.module.css'

const NewProfilesView = () => {
    const [inputNames, setInputNames] = useState(initialInputNamesValues)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const checkInput = (id: string, inputValue: string): void => {
        const inputsArray = inputNames.map((inputItem) => {
            if (inputItem.id === id) {
                return { id: id, value: inputValue }
            } else {
                return inputItem
            }
        })

        setInputNames(inputsArray)
    }

    const submitData = () => {
        const inputsArray = inputNames.map((inputItem) => {
            if (inputItem.value !== '') {
                return inputItem.value
            } else {
                return null
            }
        })

        dispatch(paymentActions.changePaymentValue({ name: 'selectedNames', value: inputsArray }))
        Router.push('/simpleSetup/secondarylanguages')
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
                    <NewProfileInput id="ownerInput" icon="/icons/userSetupIcon.png" checkInputHandler={checkInput} />
                </div>
                <div className={styles.inputAdditional}>
                    <span className={styles.inputTitle}>Add profiles?</span>
                    <NewProfileInput
                        id="personInput1"
                        icon="/icons/adduserSetupIcon.png"
                        checkInputHandler={checkInput}
                    />
                    <NewProfileInput
                        id="personInput2"
                        icon="/icons/adduserSetupIcon.png"
                        checkInputHandler={checkInput}
                    />
                    <NewProfileInput
                        id="personInput3"
                        icon="/icons/adduserSetupIcon.png"
                        checkInputHandler={checkInput}
                    />
                    <NewProfileInput
                        id="personInput4"
                        icon="/icons/adduserSetupIcon.png"
                        checkInputHandler={checkInput}
                    />
                </div>
                <p className={styles.warning}>
                    Only people who live with you may use your account. Learn more by reading our regulations.
                </p>
                <button
                    type="submit"
                    aria-label="Go next after choosing people"
                    className={styles.submitBtn}
                    onClick={submitData}
                    disabled={inputNames[0].value === ''}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default NewProfilesView
