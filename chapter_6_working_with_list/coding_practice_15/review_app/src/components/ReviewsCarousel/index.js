import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    clicked: 0,
    ChangeReview: this.props.reviewsList[0],
  }

  changeReviewStateLeft = () => {
    this.setState(prevState => {
      const newIndex =
        prevState.clicked > 0 ? prevState.clicked - 1 : prevState.clicked
      return {
        clicked: newIndex,
        ChangeReview: this.props.reviewsList[newIndex],
      }
    })
    console.log('Left button is clicked')
  }

  changeReviewStateRight = () => {
    this.setState(prevState => {
      const newIndex =
        prevState.clicked < this.props.reviewsList.length - 1
          ? prevState.clicked + 1
          : prevState.clicked
      return {
        clicked: newIndex,
        ChangeReview: this.props.reviewsList[newIndex],
      }
    })
    console.log('Right button is clicked')
  }

  render() {
    const {ChangeReview} = this.state
    const {imgUrl, username, companyName, description} = ChangeReview
    const {reviewsList} = this.props
    console.log(reviewsList)
    return (
      <>
        <div className="review-main-container">
          <div className="review-card-container">
            <h1 className="title-review">Reviews</h1>
            <img src={imgUrl} className="review-person-image" alt={username} />

            <div className="name-button-card-container">
              <button
                data-testid="leftArrow"
                type="button"
                className="left-arrow-button"
                onClick={this.changeReviewStateLeft}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  className="left-button-image"
                  alt="left arrow"
                />
              </button>

              <p className="review-person-name">{username}</p>

              <button
                data-testid="rightArrow"
                type="button"
                className="right-arrow-button"
                onClick={this.changeReviewStateRight}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  className="right-button-image"
                  alt="right arrow"
                />
              </button>
            </div>

            <p className="review-person-companyName">{companyName}</p>
            <p className="review-person-description">{description}</p>
          </div>
        </div>
      </>
    )
  }
}

export default ReviewsCarousel
