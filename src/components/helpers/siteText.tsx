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

export const footerLoggedMainSiteLinks: string[] = [
    'Audio Description',
    'Help Center',
    'Gift Cards',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Terms of Use',
    'Privacy',
    'Legal Notices',
    'Cookie Preferences',
    'Corporate Information',
    'Contact Us',
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

export const initialInputNamesValues = [
    {
        id: 'ownerInput',
        value: '',
    },
    {
        id: 'personInput1',
        value: '',
    },
    {
        id: 'personInput2',
        value: '',
    },
    {
        id: 'personInput3',
        value: '',
    },
    {
        id: 'personInput4',
        value: '',
    },
]

export const inputsLanguagesData = [
    'Bahasa Melayu',
    'čeština',
    'Dansk',
    'Deutsch',
    'English',
    'español',
    'Filipino',
    'français',
    'hrvatski',
    'Indonesia',
    'Italiano',
    'Magyar',
    'Nederlands',
    'norsk Bokmål',
    'polski',
    'português',
    'română',
    'suomi',
    'svenska',
    'Tiếng Việt',
    'Türkçe',
    'Ελληνικά',
    'русский',
    'українська',
    'עברית',
    'العربية',
    'हिन्दी',
    'தமிழ்',
    'తెలుగు',
    'ไทย',
    '한국어',
    '中文',
    '日本語',
    '粵語',
]

export const mobileNavigationLinks = [
    {
        text: 'Thrillers',
        link: '/genre/thrillers',
    },
    {
        text: 'Kids & Family',
        link: '/genre/kids',
    },
    {
        text: 'Action',
        link: '/genre/action',
    },
    {
        text: 'Anime',
        link: '/genre/anime',
    },
    {
        text: 'Comedies',
        link: '/genre/comedies',
    },
    {
        text: 'Fantasy',
        link: '/genre/fantasy',
    },
    {
        text: 'Sci-Fi',
        link: '/genre/scifi',
    },
    {
        text: 'Horror',
        link: '/genre/horror',
    },
    {
        text: 'Documentaries',
        link: '/genre/documentaries',
    },
    {
        text: 'Musicals',
        link: '/genre/musicals',
    },
    {
        text: 'Romance',
        link: '/genre/romance',
    },
    {
        text: 'Dramas',
        link: '/genre/dramas',
    },
]
