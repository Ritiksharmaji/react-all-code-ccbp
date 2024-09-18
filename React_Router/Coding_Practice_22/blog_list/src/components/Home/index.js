import './index.css'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
      alt="home"
      className="home-img"
    />

    {/* this is for the UserInfo section display */}
    <UserInfo/>

    {/* this is for the BlogList section display */}
   
  
  </div>
)

export default Home
