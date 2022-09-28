import React, {useState} from 'react'
import {CustomInput} from "../custom-input/custom-input";

export function DataChanges() {
    const [arr, setArr] = useState([])
    const [line, setLine] = useState('')

    const onChange = event => {
        const { value } = event.target
        setLine(value)
    }

    const pushLine = () => {
        setArr([...arr, line])
    }

    return (
        <>
            <h1> Data changes </h1>
            <div>
                {`[${arr.join(', ')}]`}
            </div>
            <CustomInput
                data={line}
                onChange={onChange}
            />
            <button onClick={pushLine}>
                Push
            </button>
        </>
    )
}
