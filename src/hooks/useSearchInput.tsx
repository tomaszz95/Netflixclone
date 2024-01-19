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
            const trimedValue = query.replace(/\s+/g, ' ')
            setInputSearchValue(trimedValue)
            refInput.current.focus()
        }
    }, [chosenUser, query])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        const trimedValue = inputValue.replace(/\s+/g, ' ')

        if (inputValue !== '') {
            router.push(`/search/${selectedPathname}/${inputValue}`)
            setInputSearchValue(trimedValue)
        } else if (inputValue === '') {
            setInputSearchValue('')
            router.push(`/${selectedPathname}`)
        }
    }

    return { inputSearchValue, refInput, handleInputChange }
}

export default useSearchInput
