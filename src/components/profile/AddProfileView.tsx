import { useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Router from 'next/router'

import USER_ICON from '../../assets/icons/defaultUser.png'
import { paymentActions } from '../../store/payment'
import styles from './AddProfileView.module.css'

const AddProfileView = () => {
    const [nameInput, setNameInput] = useState({ newUserName: '', isFirstTry: true })
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const paymentData = useSelector<any, any>((state) => state.payment)

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(() => {
            return { ...nameInput, newUserName: e.target.value }
        })
    }

    const submitData = () => {
        setNameInput(() => {
            return { ...nameInput, isFirstTry: false }
        })

        if (nameInput.newUserName !== '') {
            dispatch(
                paymentActions.changePaymentValue({
                    name: 'selectedNames',
                    value: [...paymentData.selectedNames, nameInput.newUserName],
                }),
            )
            Router.push(`/profilgate`)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1 className={styles.title}>Add Profile?</h1>
                <p className={styles.text}>Add a profile for another person watching Netflix.</p>
                <div className={styles.line} />
                <div className={styles.inputBox}>
                    <Image src={USER_ICON} alt="" className={styles.inputBoxIcon} />
                    <div className={styles.inputContent}>
                        <div className={styles.inputNameBox}>
                            <input
                                type="text"
                                id="newUserName"
                                className={`${styles.inputName} ${
                                    nameInput.newUserName === '' && nameInput.isFirstTry === false
                                        ? styles.emptyError
                                        : ''
                                }`}
                                placeholder="Name"
                                onChange={changeInputValue}
                            />
                            <span className={styles.error}>Please enter a name</span>
                        </div>
                        <div className={styles.inputIsKidBox}>
                            <input type="checkbox" id="newUserIsKid" className={styles.inputKid} />
                            <label htmlFor="newUserIsKid" className={styles.inputKidLabel}>
                                Kid?
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.line} />
                <div className={styles.buttons}>
                    <button
                        type="button"
                        aria-label="Add new profile button"
                        className={`${styles.button} ${styles.buttonContinue}`}
                        onClick={submitData}
                    >
                        Continue
                    </button>
                    <button
                        type="button"
                        aria-label="Cancel add new profile button"
                        className={`${styles.button} ${styles.buttonCancel}`}
                        onClick={() => Router.back()}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddProfileView
