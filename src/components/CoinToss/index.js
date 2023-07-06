// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, tossResultImage: HEADS_IMG_URL}

  onTossChange = () => {
    const {heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = heads
    let latestTailsCount = tails

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      heads: latestHeadsCount,
      tails: latestTailsCount,
    })
  }

  render() {
    const {heads, tails, tossResultImage} = this.state
    const total = heads + tails
    return (
      <div className="coin-bg-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para-text">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onTossChange}>
            Toss Coin
          </button>
          <div className="toss-coin-texts">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
