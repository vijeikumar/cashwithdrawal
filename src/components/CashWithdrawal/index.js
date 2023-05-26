// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  subNum = value => {
    this.setState(each => ({balance: each.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-with-draw-container">
          <div className="initial-container">
            <div className="user-details-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>

            <p className="balance-">{balance}</p>
            <br />
            <p className="currency">In Rupees</p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>

          <ul className="denomination-list">
            {denominationsList.map(eachOne => (
              <DenominationItem
                key={eachOne.id}
                userDetails={eachOne}
                subNum={this.subNum}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
