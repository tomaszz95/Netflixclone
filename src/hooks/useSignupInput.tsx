import { useState } from 'react'

export function useSignupInput(defaultValue: string, validationFn: any) {
    const [enteredValue, setEnteredValue] = useState(defaultValue)
    const [didEdit, setDidEdit] = useState(false)
    const [errorText, setErrorText] = useState('')

    const valueIsValid = validationFn(enteredValue)

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEnteredValue(event.target.value)
        setDidEdit(false)
    }

    function handleInputBlur() {
        setDidEdit(true)
    }

    function handleErrorText(value: string) {
        setErrorText(value)
    }

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        handleErrorText,
        errorText,
        hasError: didEdit && !valueIsValid,
    }
}
