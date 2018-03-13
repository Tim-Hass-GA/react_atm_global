import React, { Component } from 'react';

export default class Savings extends Component {
  constructor(props){
    super(props)
    this.state = {
      savingsBalance: 0
    }
  }
  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        {/* <div className={balanceClass}>${this.state.savingsBalance}</div> */}
        <input type="text" placeholder="enter an amount" ref="{(input) => { this.textInput = input; }}" />
        {/* <input type="text" placeholder="enter an amount" ref="amount" /> */}
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdrawl" onClick={this.handleWithdrawlClick} />
      </div>

    )
  }
}
