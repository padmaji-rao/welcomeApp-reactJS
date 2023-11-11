import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribed = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {isSubscribed: false}
    })
  }

  onSubscribe = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {isSubscribed: true}
    })
  }

  render() {
    let authButton

    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      authButton = (
        <button onClick={this.onSubscribed} className="button1" type="button">
          Subscribed
        </button>
      )
    } else {
      authButton = (
        <button onClick={this.onSubscribe} className="button1" type="button">
          Subscribe
        </button>
      )
    }

    console.log(isSubscribed)

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {authButton}
      </div>
    )
  }
}
export default Welcome
// Write your code here
