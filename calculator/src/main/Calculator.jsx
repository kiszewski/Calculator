import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setNumber = this.setNumber.bind(this)
        this.setNumber = this.setNumber.bind(this)
    }

    clearMemory() {
        console.log('Limpar')
    }

    setNumber(n) {
        console.log(n)
    }

    setOperation(operation) {
        console.log(operation)
    }

    render() {
        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.setNumber} />
                <Button label="8" click={this.setNumber}  />
                <Button label="9" click={this.setNumber}  />
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.setNumber}  />
                <Button label="5" click={this.setNumber}  />
                <Button label="6" click={this.setNumber}  />
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.setNumber}  />
                <Button label="2" click={this.setNumber}  />
                <Button label="3" click={this.setNumber}  />
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0"  click={this.setNumber} double/>
                <Button label="."  click={this.setNumber} />
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}

