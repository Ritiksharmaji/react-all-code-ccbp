import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    showFeedback: false,
  }

  feedbackmethod = () => {
    this.setState({showFeedback: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {showFeedback} = this.state

    if (showFeedback) {
      return (
        <div className="main-container-emoji">
          <div className="feedback-content">
            <div className="love-image-container">
              <img src={loveEmojiUrl} className="image" alt="love emoji" />
            </div>
            <h1>Thank You</h1>
            <p>we will use your feedback to improve our custumer supports</p>
          </div>
        </div>
      )
    }

    return (
      <div className="main-container-emoji">
        <div className="emoji-container">
          <div className="emoji-title-container">
            <h1 className="heading-emoji">
              How satisfied are you with our customer support performance?
            </h1>
          </div>
          <ul className="emoji-list">
            {emojis.map(eachitem => (
              <div key={eachitem.id} className="order-list-container">
                <li
                  role="img"
                  aria-label={eachitem.name}
                  className="emoji"
                  onClick={this.feedbackmethod}
                >
                  <img
                    src={eachitem.imageUrl}
                    className="image"
                    alt={eachitem.name}
                  />
                </li>
                <p>{eachitem.name}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
