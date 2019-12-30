import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    clearDisplay: false,
    displayValue: '0',
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    state = { ...initialState }

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.setOperation = this.setOperation.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    addDigit(n) {
        // evitando 2 pontos
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        //ver se o display ta vazio
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n != '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = this.state.values
            values[i] = newValue
            this.setState({ values })
            console.log(this.state.values)
        }
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ current: 1, operation, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = this.state.values
            try {
                switch (currentOperation) {
                    case '+':
                        values[0] = values[0] + values[1]
                        break;
                    
                    case '-':
                        values[0] = values[0] - values[1]
                        break;
                    
                    case '*':
                        values[0] = values[0] * values[1]
                        break;
        
                    case '/':
                        values[0] = values[0] / values[1]
                        break;
                }

            } catch (e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

render() {
    return (
        <div className="calculator">
            <Display value={this.state.displayValue} />
            <Button label="AC" click={this.clearMemory} triple />
            <Button label="/" click={this.setOperation} operation />
            <Button label="7" click={this.addDigit} />
            <Button label="8" click={this.addDigit} />
            <Button label="9" click={this.addDigit} />
            <Button label="*" click={this.setOperation} operation />
            <Button label="4" click={this.addDigit} />
            <Button label="5" click={this.addDigit} />
            <Button label="6" click={this.addDigit} />
            <Button label="-" click={this.setOperation} operation />
            <Button label="1" click={this.addDigit} />
            <Button label="2" click={this.addDigit} />
            <Button label="3" click={this.addDigit} />
            <Button label="+" click={this.setOperation} operation />
            <Button label="0" click={this.addDigit} double />
            <Button label="." click={this.addDigit} />
            <Button label="=" click={this.setOperation} operation />
        </div>
    )
}
}

