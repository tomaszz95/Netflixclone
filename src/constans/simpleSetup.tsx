import TV_ICON from '../assets/icons/tvSetupIcon.png'
import PHONE_ICON from '../assets/icons/mobileSetupIcon.png'
import DESKTOP_ICON from '../assets/icons/laptopSetupIcon.png'
import CONSOLE_ICON from '../assets/icons/consoleSetupIcon.png'
import STREAMING_ICON from '../assets/icons/deviceSetupIcon.png'
import CABLE_ICON from '../assets/icons/cableSetupIcon.png'

export const inputsDeviceSurveyData = [
    { id: 'tv', icon: TV_ICON, title: 'TV', text: 'Smart or internet connected TVs' },
    {
        id: 'phone',
        icon: PHONE_ICON,
        title: 'Phone or Tablet',
        text: 'Download the Netflix app to enjoy',
    },
    { id: 'computer', icon: DESKTOP_ICON, title: 'Computer', text: 'Desktop or laptop' },
    { id: 'console', icon: CONSOLE_ICON, title: 'Game Console', text: 'Connected to the internet' },
    {
        id: 'streaming',
        icon: STREAMING_ICON,
        title: 'Streaming Device',
        text: 'Connects your TV to the internet',
    },
    { id: 'cable', icon: CABLE_ICON, title: 'Cable Set Top Box', text: 'From your cable provider' },
    { id: 'else', icon: '', title: 'Something Else', text: 'Enjoy Netflix with other internet-connected devices' },
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
