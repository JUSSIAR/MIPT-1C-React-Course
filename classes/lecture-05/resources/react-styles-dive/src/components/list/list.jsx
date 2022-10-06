import React from 'react'
import classnames from 'classnames/bind'

import {Item} from '../item/item'

import s from './list.module.scss'

const cn = classnames.bind(s)

export function List({theme}) {

    const arr = []
    for (let i = 0; i < 5; i++) {
        arr.push(`text-${i}`)
    }

    return (
        <div className={cn('list', [`list-${theme}`])}>
            {arr.map(text => <Item theme={theme} text={text}/>)}
        </div>
    )
}