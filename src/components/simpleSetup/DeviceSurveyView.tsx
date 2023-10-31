import { useState } from 'react'

import DeviceSurveyInput from './DeviceSurveyInput'

import styles from './DeviceSurvey.module.css'

const inputsProfileData = [
    { id: 'tv', icon: '', title: 'TV', text: 'Smart or internet connected TVs' },
    { id: 'phone', icon: '', title: 'Phone or Tablet', text: 'Download the Netflix app to enjoy' },
    { id: 'computer', icon: '', title: 'Computer', text: 'Desktop or laptop' },
    { id: 'console', icon: '', title: 'Game Console', text: 'Connected to the internet' },
    { id: 'streaming', icon: '', title: 'Streaming Device', text: 'Connects your TV to the internet' },
    { id: 'cable', icon: '', title: 'Cable Set Top Box', text: 'From your cable provider' },
    { id: 'else', icon: '', title: 'Something Else', text: 'Enjoy Netflix with other internet-connected devices' },
]

const DeviceSurveyView = () => {
    const [selectedDevice, setSelectedDevice] = useState('computer')

    const checkInput = (id: string) => {
        setSelectedDevice(id)
    }

    const submitData = () => {
        console.log('ta')
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
            <div className={styles.container}>
                <div className={styles.inputs}>
                    {inputsProfileData.map((input) => (
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
                    type="submit"
                    aria-label="Go next after choosing device button"
                    className={styles.submitBtn}
                    onClick={submitData}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default DeviceSurveyView
