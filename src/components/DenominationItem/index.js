// Write your code here
import React, {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  handleClick = () => {
    const {denomination, handleWithdraw} = this.props
    handleWithdraw(denomination)
  }

  render() {
    const {denomination} = this.props
    return (
      <li>
        <p>Withdraw</p>
        <ul>
          <button className="DenominationItem" onClick={this.handleClick}>
            {denomination.value}
          </button>
        </ul>
      </li>
    )
  }
}

export default DenominationItem
