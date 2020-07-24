import React, { Component } from 'react';
import './index.css';
import Header from './header';
import Form from './form';
import Total from './total';
import ContainerApp from "./container";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCredit, addDebit } from './redux/actions/cashActions'

export class App extends Component {
  constructor(props) {
    super(props) 

    this.debitTransaction = this.debitTransaction.bind(this);
    this.creditTransaction = this.creditTransaction.bind(this);
  }

  totalCredit = 0;
  totalDebit = 0;

  creditTransaction (state) {
    state.id = Math.floor(Math.floor + 1);
    this.props.addCredit(state);
  }
  debitTransaction (state) {
    state.id = Math.floor(Math.floor + 1);
    this.props.addDebit(state);
  }

 
  render() {
    return (
      <div>
        <Header />
        <main>
          <Total totalCredit={this.totalCredit} totalDebit={this.totalDebit} credits={this.props.cash.credits} debits={this.props.cash.debits} />
          <Form creditTransaction={this.creditTransaction} debitTransaction={this.debitTransaction} />
          <ContainerApp credits={this.props.cash.credits} debits={this.props.cash.debits} totalCredit={this.totalCredit} totalDebit={this.totalDebit} />
        </main>
      </div>
    )
  }
}

App.propType = {
  cash: PropTypes.object.isRequired,
  addCredit: PropTypes.func.isRequired,
  addDebit: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  cash: state.cash
})

const mapDispatchToProps = {
  addCredit,
  addDebit
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

