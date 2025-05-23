import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h3 className="menu-heading">Left Navbar Menu</h3>
              <ul className="left-navbar-menu-container">
                <li className="left-navbar-list-item">Item 1</li>
                <li className="left-navbar-list-item">Item 2</li>
                <li className="left-navbar-list-item">Item 3</li>
                <li className="left-navbar-list-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="center-content-container">
              <h3 className="menu-heading">Content</h3>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar-container">
              <h3 className="menu-heading">Right Navbar</h3>
              <div className="all-advts-container">
                <div className="advt-container">
                  <p className="advt-indication">Ad 1</p>
                </div>
                <div className="advt-container">
                  <p className="advt-indication">Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
