import { useState } from 'react'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import DeviceSurveyInput from './DeviceSurveyInput'

import { paymentActions } from '../../store/payment'
import { inputsDeviceSurveyData } from '../../constans/simpleSetup'
import styles from './DeviceSurveyView.module.css'

const DeviceSurveyView = () => {
    const [selectedDevice, setSelectedDevice] = useState(['computer'])
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const checkInput = (id: string) => {
        if (selectedDevice.includes(id)) {
            const newArray = selectedDevice.filter((device) => device !== id)
            setSelectedDevice(newArray)
        } else {
            setSelectedDevice([...selectedDevice, id])
        }
    }

    const submitData = () => {
        dispatch(paymentActions.changePaymentValue({ name: 'selectedDevices', value: selectedDevice }))

        Router.push('/simpleSetup/newprofiles')
    }

    return (
        <div className={styles.container}>
            <div className={styles.textBox}>
                <span className={styles.step}>Step 1 of 4</span>
                <h1 className={styles.title}>What devices will you be watching on?</h1>
                <p className={styles.text}>
                    You can watch Netflix on any of these devices. <span>Select all that apply.</span>
                </p>
            </div>
            <div className={styles.inputsContainer}>
                <div className={styles.inputs}>
                    {inputsDeviceSurveyData.map((input) => (
                        <DeviceSurveyInput
                            id={input.id}
                            icon={input.icon}
                            title={input.title}
                            text={input.text}
                            checkInputHandler={checkInput}
                            key={input.id}
                            selectedDev={selectedDevice}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    aria-label="Go next after choosing device button"
                    className={styles.submitBtn}
                    onClick={submitData}
                    disabled={selectedDevice.length === 0}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default DeviceSurveyView
