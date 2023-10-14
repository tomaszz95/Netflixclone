import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
let app

export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSANGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
}

if (getApps().length < 1) {
    app = initializeApp(firebaseConfig)
}

const auth = getAuth(app)
export default auth
