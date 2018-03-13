import React, { Component } from 'react';

// import Savings from './Savings';
// import Checking from './Checking';

export default class Account extends Component {
  // constructor(props) {
  //   super(props)
    // this.state = {
    //   balance: 0
    // }

    // this.handleDepositClick = this.handleDepositClick.bind(this);
    // this.handleWithdrawlClick = this.handleWithdrawlClick.bind(this);
    // this.handleTransferClick = this.handleTransferClick.bind(this);
    // this.focusTextInput = this.focusTextInput.bind(this);
  // }

  // focusTextInput() {
  //   // Explicitly focus the text input using the raw DOM API
  //   this.textInput.focus();
  // }

  // handleDepositClick(e) {
  //   e.preventDefault();
  //   if (isNaN(this.refs.amount.value) || this.refs.amount.value < 0) {
  //     console.log("Not a number");
  //   }
  //   else {
  //     let amount = +this.refs.amount.value;
  //     let newBalance = this.state.balance + amount;
  //     this.setState({
  //       balance: newBalance
  //     })
  //     this.refs.amount.value = '';
  //   }
  // }

  // handleWithdrawlClick(e) {
  //   e.preventDefault();
  //   if (isNaN(this.refs.amount.value)
  //       || this.refs.amount.value < 0
  //       || this.refs.amount.value > this.state.balance) {
  //     console.log("Not a number or valid operation. Please try again.");
  //   }
  //   else {
  //     let amount = +this.refs.amount.value;
  //     let newBalance = this.state.balance - amount;
  //     this.setState({
  //       balance: newBalance
  //     })
  //     this.refs.amount.value = '';
  //   }
  // }

  render() {
    const total = parseInt(this.props.balance, 10)

    let balanceClass = 'balance';
    if (total === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${total}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        {/* <input type="text" placeholder="enter an amount" ref="{this.state.amount}" /> */}
        <input
          type="button"
          value="Deposit"
          onClick={(e) => this.props.handleDepositClick(e, this.refs.amount.value, this.props.name)} />
        <input
          type="button"
          value="Withdrawl"
          onClick={(e) => this.props.handleWithdrawlClick(e, this.refs.amount.value, this.props.name)} />
        <input
          type="button"
          value="Transfer"
          onClick={() => this.props.handleTransferClick(this.refs.amount.value, this.props.name)} />

        {/* <Savings name="Savings" /> */}
      </div>
    )
  }
}
