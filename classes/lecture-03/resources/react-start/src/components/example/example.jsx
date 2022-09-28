import React from 'react'

// JSON Data import data-changes
import data from '../../assets/data.json'

// Imports CSS module as JS object
import s from './example.module.css'

// Simple helper
const pow2 = x => x * x

/**
 * Functional Component data-changes
 * Power 2 task
 * @see props object decomposition
 */
export function Example({value}) {
    // Making content string
    const content = `Value = ${value}; Value ^ 2 = ${pow2(value)}`

    return (
        <>
            <h1> Pow2 </h1>
            <li className={s.block}>
                {content}
            </li>
        </>
    )
}
