import React from 'react'
import classnames from 'classnames/bind'
import { connect } from 'react-router'

import s from './item.module.scss'

const cn = classnames.bind(s)

const mapStateToProps = (state) => ({
    theme: state.themeReducer.theme,
    data: state.dataReducer.data,
})

function Item({data, theme}) {
    return (
        <div className={cn('item', [`item-${theme}`])}>
            <div className={cn('text', [`text-${theme}`])}>
                {data}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Item)
