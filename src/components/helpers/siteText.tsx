import { sectionMainDataObj } from './types'

export const mainSiteSectionData: sectionMainDataObj = {
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

export const footerMainSiteLinks: string[] = [
    'FAQ',
    'Help Center',
    'Account',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Redeem Gift Cards',
    'Buy Gift Cards',
    'Ways to Watch',
    'Terms of Use',
    'Privacy',
    'Cookie Preferences',
    'Corporate Information',
    'Contact Us',
    'Speed Test',
    'Legal Guarantee',
    'Legal Notices',
    'Only on Netflix',
    'Ad Choices',
]

export const inputsDeviceSurveyData = [
    { id: 'tv', icon: '/icons/tvSetupIcon.png', title: 'TV', text: 'Smart or internet connected TVs' },
    {
        id: 'phone',
        icon: '/icons/mobileSetupIcon.png',
        title: 'Phone or Tablet',
        text: 'Download the Netflix app to enjoy',
    },
    { id: 'computer', icon: '/icons/laptopSetupIcon.png', title: 'Computer', text: 'Desktop or laptop' },
    { id: 'console', icon: '/icons/consoleSetupIcon.png', title: 'Game Console', text: 'Connected to the internet' },
    {
        id: 'streaming',
        icon: '/icons/deviceSetupIcon.png',
        title: 'Streaming Device',
        text: 'Connects your TV to the internet',
    },
    { id: 'cable', icon: '/icons/cableSetupIcon.png', title: 'Cable Set Top Box', text: 'From your cable provider' },
    { id: 'else', icon: '', title: 'Something Else', text: 'Enjoy Netflix with other internet-connected devices' },
]
