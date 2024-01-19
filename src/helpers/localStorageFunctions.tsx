export function createCookie(cookieName: string, value: string) {
    localStorage.setItem(cookieName, value)

    return cookieName
}

export function getCookie(cookieName: string) {
    const cookie = localStorage.getItem(cookieName)

    return cookie
}

export function deleteCookie(cookieName: string) {
    localStorage.removeItem(cookieName)
}
