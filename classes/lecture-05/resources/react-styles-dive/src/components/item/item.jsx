import React from 'react'
import classnames from 'classnames/bind'

import s from './item.module.scss'

const cn = classnames.bind(s)

export function Item({text, theme}) {
    return (
        <div className={cn('item', [`item-${theme}`])}>
            <div className={cn('text', [`text-${theme}`])}>
                {text}
            </div>
        </div>
    )
}
