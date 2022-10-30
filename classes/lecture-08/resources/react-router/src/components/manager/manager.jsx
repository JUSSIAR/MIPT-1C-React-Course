import React from 'react'
import classnames from 'classnames/bind'
import { connect } from 'react-redux'

import { actionChangeTheme } from '../../common/store/actions/changeTheme.js'
import { actionChangeData } from '../../common/store/actions/changeData.js'

import s from './manager.module.scss'
import {ThemeTypes} from "../../common/store/constants";

const cn = classnames.bind(s)

const mapStateToProps = (state) => ({
    theme: state.themeReducer.theme,
    data: state.dataReducer.data,
})

const mapDispatchToProps = (dispatch) => ({
    changeData: (data) => dispatch(actionChangeData(data)),
    changeTheme: () => dispatch(actionChangeTheme()),
})

function Manager({theme, data, changeData, changeTheme}) {
    const dataHandler = event => {
        const { value } = event.target
        changeData(value)
    }

    const themeHandler = () => {
        changeTheme()
    }

    return (
        <div className={cn('manager', [`manager-${theme}`])}>
            <input
                type='checkbox'
                value={theme === ThemeTypes.light}
                onClick={themeHandler}
            />
            <input
                className={cn('text', [`text-${theme}`])}
                type='text'
                value={data}
                onChange={dataHandler}
            />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Manager)
