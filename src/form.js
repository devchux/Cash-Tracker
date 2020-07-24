import React, { Component } from 'react'

export class Form extends Component {
    constructor (props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            transaction: '',
            amount: 0
        }
    }
    handleChange (e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit (e){
        e.preventDefault();
        let credit = document.querySelector('#credit');
        let debit = document.querySelector('#debit');
        const {creditTransaction, debitTransaction} = this.props;

        if (credit.checked) {
            creditTransaction(this.state);
        } else if (debit.checked) {
            debitTransaction(this.state);
        } else {
            console.log('none checked')
        }
        document.querySelector('#transaction').value = "";
        document.querySelector('#amount').value = "";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="transaction" name="transaction" placeholder="Enter your transactions here..." onChange={this.handleChange} autoComplete="off" />
                <input type="text" id="amount" name="amount" placeholder="Amount" autoComplete="off" onChange={this.handleChange} /><br/><br/>
                <input type="radio" name="option" id="credit" /> Credit (+)
                <input type="radio" name="option" id="debit" /> Debit (-)<br/><br/>
                <input type="submit" name="result" value="Result" />
            </form>
        )
    }
}

export default Form
