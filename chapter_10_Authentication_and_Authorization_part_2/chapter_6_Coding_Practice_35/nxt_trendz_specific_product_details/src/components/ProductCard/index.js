
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, brand, imageUrl, rating, price, id} = productData
  const history = useHistory();

  const changedir = ()=>{
    history.push(`/products/${id}`); // Navigate programmatically
    console.log(productData)
  }

  return (
    <li className="product-item" onClick={changedir}>
      <img src={imageUrl} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
  )
}
export default ProductCard
