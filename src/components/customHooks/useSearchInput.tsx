import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

type UseSearchInputProps = {
    chosenUser: string
    query: string | string[] | undefined
}

const useSearchInput = ({ chosenUser, query }: UseSearchInputProps) => {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const router = useRouter()
    const refInput = useRef<HTMLInputElement | null>(null)
    const selectedPathname = useSelector<any, any>((state) => state.pathname)

    useEffect(() => {
        if (query && query !== '' && typeof query === 'string' && refInput.current) {
            setInputSearchValue(query)
            refInput.current.focus()
        }
    }, [chosenUser, query])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value

        if (e.target.value.trim() !== '') {
            router.push(`/search/${selectedPathname}/${inputValue}`)
            setInputSearchValue(inputValue)
        } else if (inputValue === '' && !router.pathname.includes('kids')) {
            setInputSearchValue('')
            router.push(`/${selectedPathname}`)
        }
    }

    return { inputSearchValue, refInput, handleInputChange }
}

export default useSearchInput
