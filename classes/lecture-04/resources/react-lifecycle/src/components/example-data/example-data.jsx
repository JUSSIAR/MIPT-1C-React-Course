import React from 'react'

import {getData} from "../../api/mock-api";

import s from './example-data.module.css'


export class ExampleData extends React.Component {

    state = {
        data: Array.from(
            {length: this.props.dataSize},
            () => ({})
        )
    }

    componentDidMount() {
        getData().then(dataset => {
            this.setState(() => ({
                data: [...dataset]
            }))
        })
    }

    render() {
        return (
            <div className={s.container}>
                {this.state.data.map(({text, color}, id) => (
                    <div style={{color: color || 'black'}} className={s.item} key={id}>
                        {text || 'Loading...'}
                    </div>
                ))}
            </div>
        )
    }


}