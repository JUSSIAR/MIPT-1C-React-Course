import React from 'react'

/**
 * Class Component example
 * Counter task
 */
export class ExampleClass extends React.Component {

    state = {
        counter: 0
    }

    inc = () => {
        this.setState(oldState => ({
            counter: oldState.counter + 1
        }))
    }

    dec = () => {
        this.setState(oldState => ({
            counter: oldState.counter - 1
        }))
    }

    render() {
        return (
            <>
                <h1> Class component </h1>
                <div>{this.state.counter}</div>
                <div className="cont">
                    <div className="button" onClick={this.inc}>+</div>
                </div>
                <div className="cont">
                    <div className="button" onClick={this.dec}>-</div>
                </div>
            </>
        )
    }
}