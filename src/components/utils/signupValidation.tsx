export const isEmailValidFunc = (email: string) => {
    if (
        email !== '' &&
        email.length < 50 &&
        email.length > 5 &&
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
        return true
    } else {
        return false
    }
}

export const isPasswordValidFunc = (password: string) => {
    if (password !== '' && password.length < 30 && password.length > 5) {
        return true
    } else {
        return false
    }
}

export const hasMinAndMaxLength = (value: string, minL: number, maxL: number) => {
    if (value.length < maxL && value.length > minL) {
        return true
    } else {
        return false
    }
}
