// Write your code here
import React, {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 2000,
      totalWithdrawn: 0,
    }
  }

  handleWithdraw = denomination => {
    const {amount, totalWithdrawn} = this.state
    const newAmount = amount - denomination.value
    if (newAmount >= 0) {
      this.setState({
        amount: newAmount,
        totalWithdrawn: totalWithdrawn + denomination.value,
      })
    } else {
      alert('Not enough balance')
    }
  }

  render() {
    const {amount, totalWithdrawn} = this.state
    const {denominationsList} = this.props
    return (
      <div className="CashWithdrawal">
        <h1>Cash Withdrawal</h1>
        <p>Your Balance: {amount}</p>
        <p>Withdraw</p>
        <p>CHOOSE SUM (IN RUPEES)</p>
        <div className="Denominations">
          {denominationsList.map(denomination => (
            <DenominationItem
              key={denomination.id}
              denomination={denomination}
              handleWithdraw={this.handleWithdraw}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
