import { useState, useEffect } from "react";

function getLocalStorageValue(key, initial) {
    console.log('storage instance')

    const value = window.localStorage.getItem(key)
    if (value) {
        return value
    }

    return initial instanceof Function
        ? initial()
        : initial
}

function setLocalStorageValue(key, value) {
    window.localStorage.setItem(key, value)
}

export function useLocalStorage(key, initial) {
    const [value, setValue] = useState(
        () => getLocalStorageValue(key, initial)
    )

    useEffect(() => {
        setLocalStorageValue(key, value)
    }, [value])

    return [value, setValue]
}
