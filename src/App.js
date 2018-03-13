import React, { Component } from 'react';
import logo from './ga.png';

import Account from './Account';
// import Savings from './Savings';
// import Checking from './Checking';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      savingsBalance: 0,
      checkingBalance: 0,
    }
    this.handleDepositClick = this.handleDepositClick.bind(this);
    this.handleWithdrawlClick = this.handleWithdrawlClick.bind(this);
    // this.handleTransferClick = this.handleTransferClick.bind(this);
  }
  handleDepositClick(e, amount, name) {
    e.preventDefault()
    console.log(amount)
    if (isNaN(amount) || amount < 0) {
      // if (isNaN(this.refs.amount.value) || this.refs.amount.value < 0) {
      console.log("Not a number")
    }
    else {
      const inputAmount = parseInt(amount, 10)
      let newBalance = 0
      if(name ==='Checking'){
        newBalance = +this.state.checkingBalance + inputAmount
        this.setState({
          checkingBalance: newBalance
        })
      } else {
        newBalance = +this.state.savingsBalance + inputAmount
        this.setState({
          savingsBalance: newBalance
        })
      }
    }
  }

  handleWithdrawlClick(e, amount, name) {
    e.preventDefault()
    console.log(amount)
    if (isNaN(amount) || amount < 0) {
      console.log("Not a number or valid operation. Please try again.")
    }
    else {
      const inputAmount = parseInt(amount, 10)
      let newBalance = 0
      if (name === 'Checking'){
        newBalance = +this.state.checkingBalance - inputAmount
        this.setState({
          checkingBalance: newBalance
        })
      } else {
        newBalance = +this.state.savingsBalance - inputAmount
        this.setState({
          savingsBalance: newBalance
        })
      }
    }
  }

  handleTransferClick = (amount, name) => {
    console.log('transfer ' + amount)
    if (isNaN(amount) || amount < 0){
      console.log("Not a number or valid operation. Please try again.")
    } else {
      name = name.toLowerCase(name)
      let current = ''
      name === 'checking' ? current = this.state.checkingBalance : current = this.state.savingsBalance
      if(amount <= current && amount > 0){
        if (name === 'checking'){
          this.setState({
            checkingBalance: this.state.checkingBalance - parseInt(amount, 10),
            savingsBalance: this.state.savingsBalance + parseInt(amount, 10)
          })
        } else {
          this.setState({
            savingsBalance: this.state.savingsBalance - parseInt(amount, 10),
            checkingBalance: this.state.checkingBalance + parseInt(amount, 10)
          })
        }
      }
    }
  }

  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account name="Checking"
          balance={this.state.checkingBalance}
          handleDepositClick={this.handleDepositClick}
          handleTransferClick={this.handleTransferClick}
          handleWithdrawlClick={this.handleWithdrawlClick}

        />
        <Account name="Savings"
          balance={this.state.savingsBalance}
          handleDepositClick={this.handleDepositClick}
          handleTransferClick={this.handleTransferClick}
          handleWithdrawlClick={this.handleWithdrawlClick}

        />
        {/* <Savings name="Savings" /> */}
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
