import React from 'react'
import {Link} from 'react-router-dom'

import styles from './items.module.scss'

const items = [
    {
        id: 1,
        text: "a"
    },
    {
        id: 2,
        text: "bb"
    },
    {
        id: 3,
        text: "ccc"
    }
]

function Items() {
    return (
        <div className={styles.container}>
            {items.map(({id, text}) => (
                <Link className={styles.link} to={`${id}`} key={id}>
                    {text}
                </Link>
            ))}
        </div>
    )
}

export default Items
