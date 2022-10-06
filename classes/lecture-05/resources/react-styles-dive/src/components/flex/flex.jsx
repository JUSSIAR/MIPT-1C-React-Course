import React from "react";

import s from './flex.module.css'

export function Flex() {
    return (
        <div className={s.container}>
            <div className={s.item1}>t1</div>
            <div className={s.item2}>t2</div>
        </div>
    )
}
