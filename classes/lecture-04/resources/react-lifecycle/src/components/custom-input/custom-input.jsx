import React from "react";

import s from './custom-input.module.css'

export const CustomInput = ({data, onChange}) => (
    <input
        className={s.custom}
        value={data}
        onChange={onChange}
        placeholder={"Enter something..."}
    />
)