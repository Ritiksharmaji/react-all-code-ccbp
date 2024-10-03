import './index.css'

const CardItem = props => {
  const {CardItem} = props
  const {title, description, imgUrl,className} = CardItem

  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="card-title">
          {title}
        </h1>
        <p className="card-description">
        {description}
        </p>
        <img src={imgUrl} className="card-img"
        alt={title}/>
      </div>
    </li>
  )
}

export default CardItem
