import { useState, useEffect } from 'react'

const useDropdown = (initialState) => {
    const [isOpen, setIsOpen] = useState(initialState)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        setIsOpen(initialState)
    }, [initialState])

    return {
        isOpen,
        toggle,
        setIsOpen,
    }
}

export default useDropdown
