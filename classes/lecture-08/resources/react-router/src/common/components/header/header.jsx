import React from 'react'
import {Link} from 'react-router-dom'

import styles from './header.module.scss'

const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.title}>
            Шапка с навигацией
        </h1>
        <nav className={styles.navigation}>
            <Link to='/'>home</Link>
            <Link to='/items'>items</Link>
            <Link to='/manager'>manager</Link>
        </nav>
    </header>
)

export default Header