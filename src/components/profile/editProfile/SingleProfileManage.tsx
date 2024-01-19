import Router from 'next/router'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { paymentActions } from '../../../store/payment'
import EditProfileButtons from './EditProfileButtons'
import EditProfileForm from './EditProfileForm'
import EditProfileImage from './EditProfileImage'

import styles from './SingleProfileManage.module.css'

type ComponentType = {
    profilName: string
}

const SingleProfileManage: React.FC<ComponentType> = ({ profilName }) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const [formData, setFormData] = useState({
        selectedName: profilName,
        selectedLanguage: 'English',
        oldName: profilName,
    })

    useEffect(() => {
        setFormData({
            selectedName: profilName,
            selectedLanguage: 'English',
            oldName: profilName,
        })
    }, [profilName])

    const handleInputChange = (name: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        if (formData.selectedName.trim().length > 0) {
            dispatch(paymentActions.editProfilInfo(formData))

            Router.push('/profile/manage')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Edit Profile</h1>
                <div className={styles.line} />
                <div className={styles.contentBox}>
                    <EditProfileImage profilName={profilName} />
                    <EditProfileForm formData={formData} onInputChange={handleInputChange} />
                </div>
                <div className={styles.line} />
                <EditProfileButtons onHandleSubmit={handleSubmit} profilName={profilName} />
            </div>
        </div>
    )
}

export default SingleProfileManage
