import React, { Component } from 'react';

export default class Checking extends Component {
  constructor(props){
    super(props)
    this.state = {
      checkingBalance: 0
    }
  }
  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.checkingBalance}</div>
        <input type="text" placeholder="enter an amount" ref="{(input) => { this.textInput = input; }}" />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdrawl" onClick={this.handleWithdrawlClick} />
      </div>
    )
  }
}
