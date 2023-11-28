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

export const navigationBrowseLinks = [
    {
        text: 'Fantasy',
        link: '/genre/14',
    },
    {
        text: 'Animation',
        link: '/genre/16',
    },
    {
        text: 'Drama',
        link: '/genre/18',
    },
    {
        text: 'Horror',
        link: '/genre/27',
    },
    {
        text: 'Action',
        link: '/genre/28',
    },
    {
        text: 'Comedy',
        link: '/genre/35',
    },
    {
        text: 'History',
        link: '/genre/36',
    },
    {
        text: 'Crime',
        link: '/genre/80',
    },
    {
        text: 'Documentary',
        link: '/genre/99',
    },
    {
        text: 'Mystery',
        link: '/genre/9648',
    },
    {
        text: 'Romance',
        link: '/genre/10749',
    },
    {
        text: 'Family',
        link: '/genre/10751',
    },
    {
        text: 'Action & Adventure',
        link: '/genre/10759',
    },
    {
        text: 'Sci-Fi & Fantasy',
        link: '/genre/10765',
    },
    {
        text: 'War & Politics',
        link: '/genre/10768',
    },
]

export const navigationKidsLinks = [
    {
        text: 'Adventure',
        link: '/genre/12',
    },
    {
        text: 'Fantasy',
        link: '/genre/14',
    },
    {
        text: 'Animation',
        link: '/genre/16',
    },
    {
        text: 'Action',
        link: '/genre/28',
    },
    {
        text: 'Comedy',
        link: '/genre/35',
    },
    {
        text: 'History',
        link: '/genre/36',
    },
    {
        text: 'Documentary',
        link: '/genre/99',
    },
    {
        text: 'Science Fiction',
        link: '/genre/878',
    },
    {
        text: 'Mystery',
        link: '/genre/9648',
    },
    {
        text: 'Music',
        link: '/genre/10402',
    },
    {
        text: 'Romance',
        link: '/genre/10749',
    },
    {
        text: 'Family',
        link: '/genre/10751',
    },
    {
        text: 'Kids Heaven',
        link: '/genre/10762',
    },
]

export const fetchedMovieGenres = [
    { id: 12, name: 'Adventure' },
    { id: 14, name: 'Fantasy' },
    { id: 16, name: 'Animation' },
    { id: 18, name: 'Drama' },
    { id: 27, name: 'Horror' },
    { id: 28, name: 'Action' },
    { id: 35, name: 'Comedy' },
    { id: 36, name: 'History' },
    { id: 37, name: 'Western' },
    { id: 53, name: 'Thriller' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 878, name: 'Science Fiction' },
    { id: 9648, name: 'Mystery' },
    { id: 10402, name: 'Music' },
    { id: 10749, name: 'Romance' },
    { id: 10751, name: 'Family' },
    { id: 10752, name: 'War' },
]

export const fetchedSeriesGenres = [
    { id: 16, name: 'Animation' },
    { id: 18, name: 'Drama' },
    { id: 35, name: 'Comedy' },
    { id: 37, name: 'Western' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 9648, name: 'Mystery' },
    { id: 10751, name: 'Family' },
    { id: 10759, name: 'Action & Adventure' },
    { id: 10762, name: 'Kids' },
    { id: 10763, name: 'News' },
    { id: 10764, name: 'Reality' },
    { id: 10765, name: 'Sci-Fi & Fantasy' },
    { id: 10766, name: 'Soap' },
    { id: 10767, name: 'Talk' },
    { id: 10768, name: 'War & Politics' },
]

export const allFetchedGenres = [
    { id: 12, name: 'Adventure' },
    { id: 14, name: 'Fantasy' },
    { id: 16, name: 'Animation' },
    { id: 18, name: 'Drama' },
    { id: 27, name: 'Horror' },
    { id: 28, name: 'Action' },
    { id: 35, name: 'Comedy' },
    { id: 36, name: 'History' },
    { id: 37, name: 'Western' },
    { id: 53, name: 'Thriller' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 878, name: 'Science Fiction' },
    { id: 9648, name: 'Mystery' },
    { id: 10402, name: 'Music' },
    { id: 10749, name: 'Romance' },
    { id: 10751, name: 'Family' },
    { id: 10752, name: 'War' },
    { id: 10759, name: 'Action & Adventure' },
    { id: 10762, name: 'Kids' },
    { id: 10763, name: 'News' },
    { id: 10764, name: 'Reality' },
    { id: 10765, name: 'Sci-Fi & Fantasy' },
    { id: 10766, name: 'Soap' },
    { id: 10767, name: 'Talk' },
    { id: 10768, name: 'War & Politics' },
    { id: 10770, name: 'TV Movie' },
]
