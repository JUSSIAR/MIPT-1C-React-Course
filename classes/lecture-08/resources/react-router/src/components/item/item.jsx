import React from 'react'
import classnames from 'classnames/bind'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { mockedDataProvider } from '../../dev/utils/mocked-data-provider'

import s from './item.module.scss'

const cn = classnames.bind(s)

const mapStateToProps = (state) => ({
    theme: state.themeReducer.theme,
    data: state.dataReducer.data,
})

function Item({data, theme}) {
    const { id } = useParams()

    const { title, text } = mockedDataProvider(id, data)

    return (
        <div className={cn('item', [`item-${theme}`])}>
            <div className={cn('text', [`text-${theme}`])}>
                <h3> {title} </h3>
                <p> {text} </p>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Item)
