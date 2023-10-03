import styles from './CentralSection.module.css'
import { sectionMainDataObj } from '../helpers/types'

const sectionData: sectionMainDataObj = {
    '1': {
        title: 'Enjoy on your TV',
        text: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
        image: '/photos/tv.png',
        video: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v',
    },
    '2': {
        title: 'Download your shows to watch offline',
        text: 'Save your favorites easily and always have something to watch.',
        image: '/photos/mobile.jpg',
    },
    '3': {
        title: 'Watch everywhere',
        text: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
        image: '/photos/device.png',
        video: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v',
    },
    '4': {
        title: 'Create profiles for kids',
        text: 'Send kids on adventures with their favorite characters in a space mode just for them - free with your membership.',
        image: '/photos/kids.png',
    },
}

type ComponentType = { sectionCount: string; imgDirection: string }

const CentralSection: React.FC<ComponentType> = ({ sectionCount, imgDirection }) => {
    const section = sectionData[sectionCount]
    let insideBox
    let boxClass
    let imgClass
    if (sectionCount === '1') {
        insideBox = (
            <div className={styles.video}>
                <video src={section.video} autoPlay playsInline muted loop></video>
            </div>
        )
        boxClass = 'left'
        imgClass = 'right'
    } else if (sectionCount === '2') {
        insideBox = (
            <div className={styles.stranger}>
                <div className={styles.strangerBox}>
                    <img src="/photos/stranger.png" alt="Stranger things movie screen" />
                    <div className={styles.strangerText}>
                        <p>Stranger Things</p>
                        <span>Downloading...</span>
                    </div>
                </div>
                <div className={styles.animation}></div>
            </div>
        )
        boxClass = 'right'
        imgClass = 'left'
    } else if (sectionCount === '3') {
        insideBox = (
            <div className={styles.videoSecond}>
                <video src={section.video} autoPlay playsInline muted loop></video>
            </div>
        )
        boxClass = 'left'
        imgClass = 'right'
    } else if (sectionCount === '4') {
        insideBox = <div></div>
        boxClass = 'right'
        imgClass = 'left'
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.sectionBox} ${boxClass}`}>
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                </div>
                <div className={`${styles.imageBox} ${imgClass}`}>
                    <img src={section.image} alt={section.title} className={styles.image} />
                    {insideBox}
                </div>
            </div>
        </section>
    )
}

export default CentralSection
