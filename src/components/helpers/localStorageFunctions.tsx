export function createCookies(cookieName: string, value: string) {
    localStorage.setItem(cookieName, value)
}

export function getCookies(cookieName: string) {
    const cookie = localStorage.getItem(cookieName)

    return cookie
}

export function deleteCookies(cookieName: string) {
    localStorage.removeItem(cookieName)
}
