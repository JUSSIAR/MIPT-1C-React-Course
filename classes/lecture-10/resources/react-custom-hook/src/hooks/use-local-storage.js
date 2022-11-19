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


/**
 * Extractor
 * @param string
 * @returns {string|undefined}
 * @see returns 'A' when 'a' is the first symbol
 */
function extractFirstAndLastSymbols(string) {
    if (!string) {
        return undefined
    }

    if (!(string instanceof String)) {
        return undefined
    }

    if (string.length === 1) {
        return string[0]
    }

    if (string.length[0] === 'a') {
        return 'A' + string[string.length - 1]
    }

    return string[0] + string[string.length - 1]
}

