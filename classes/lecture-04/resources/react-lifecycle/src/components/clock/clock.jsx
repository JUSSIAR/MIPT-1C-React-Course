import React from 'react'

import s from './clock.module.css'

const DateTimeComponent = ({ date }) => (
    <div className={s.clocks}>
        {date.toLocaleTimeString()}
    </div>
)

export class Clock extends React.Component {
    state = {
        time: new Date()
    }
    interval = null

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <div className={s.title}>Current time:</div>
                <DateTimeComponent date={this.state.time} />
            </div>
        )
    }
}
