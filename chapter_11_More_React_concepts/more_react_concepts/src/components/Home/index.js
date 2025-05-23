import {Link} from 'react-router-dom'

import './index.css'

const Home = () => {
  return (
    <ul className="home-container">
      <li className="list-item">
        <Link to="/counter">Counter</Link>
      </li>
      <li className="list-item">
        <Link to="/greetings">Greetings</Link>
      </li>
      <li className="list-item">
        <Link to="/post">Post</Link>
      </li>
    </ul>
  )
}

export default Home
