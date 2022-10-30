import React from 'react'

import styles from './content-holder.module.scss'

const ContentHolder = ({children}) => (
    <main className={styles.contentHolder}>
        {children}
    </main>
)

export default ContentHolder