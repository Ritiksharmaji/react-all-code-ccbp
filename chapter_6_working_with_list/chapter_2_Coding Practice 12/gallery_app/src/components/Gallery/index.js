import {Component} from 'react'
import Thumbnailitem from '../ThumbnailItem'
import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.
class Gallery extends Component {
  state = {
    screen_Image_id: imagesList[0].id,
  }

  changeBodyImage = id => {
    this.setState({screen_Image_id: id})
  }

  getfilterImage = () => {
    const {screen_Image_id} = this.state
    const filterImage = imagesList.find(
      eachimage => eachimage.id === screen_Image_id,
    )
    return filterImage
  }

  render() {
    const {screen_Image_id} = this.state
    // const screen_image = imagesList[]
    console.log(screen_Image_id)
    const filterImage = this.getfilterImage()
    console.log('image object', filterImage)
    const {imageUrl, imageAltText} = filterImage
    console.log('image', imageUrl, 'imageALT', imageAltText)

    return (
      <>
        <div className="main-container-images">
          <div className="container-image-slice">
            <div className="image-card-container">
              <img src={imageUrl} alt={imageAltText} className="image" />
            </div>
            <h1 className="nature-heading">Nature Photography</h1>
            <p className="paragraph-nature">Nature Photography by Rahul</p>

            <ul>
              <div className="card-container-slice-images">
                {imagesList.map(eachImage => (
                  <Thumbnailitem
                    key={eachImage.id}
                    item={eachImage}
                    changeTextidmethod={this.changeBodyImage}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Gallery
