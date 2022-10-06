import React from "react";

import s from './grid.module.css'

export function Grid() {
    return (
        <div className={s.container}>
            <div className={s.item}/>
            <div className={s.item}/>
            <div className={s.item}/>
            <div className={s.item}/>
        </div>
    )
}