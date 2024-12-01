// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="head1">
          How Satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                className="button"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="img1" />
                <br />
                <span className="para1">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThanksScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thanks-container">
        <img className="img2" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="head2">Thank You!</h1>
        <p className="para2">
          We will use your feedback to improve customer our support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          {isFeedbackSelected
            ? this.renderThanksScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
