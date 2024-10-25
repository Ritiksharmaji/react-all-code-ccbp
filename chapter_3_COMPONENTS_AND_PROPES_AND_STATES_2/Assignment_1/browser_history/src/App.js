import './App.css'
import {Component} from 'react'

// List of history items
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },
  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },
  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {
    default_list: initialHistoryList,
    searchInput: '',
  }

  changeInputSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  displaysearchList = () => {
    const {default_list, searchInput} = this.state
    return default_list.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  deleteItem = id => {
    const {default_list} = this.state
    const updatedList = default_list.filter(eachitem => eachitem.id !== id)
    this.setState({
      default_list: updatedList,
    })
  }

  render() {
    const {searchInput, default_list} = this.state
    const filteredList = this.displaysearchList()

    return (
      <div className="container-browser-history">
        <div className="header-browser-history">
          {/* App logo image with alt="app logo" */}
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />

          <div className="card-container">
            <div className="input-container-browser">
              {/* Search icon image with alt="search" */}
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                value={searchInput}
                onChange={this.changeInputSearch}
                placeholder="Search history"
              />
            </div>
          </div>
        </div>

        {/* Conditionally display history list or "No history" message */}
        {filteredList.length > 0 ? (
          <ul className="history-list">
            {filteredList.map(eachitem => (
              <li key={eachitem.id} className="history-item">
                <p>{eachitem.timeAccessed}</p>
                <img
                  src={eachitem.logoUrl}
                  className="logo-image"
                  alt="domain logo"
                />
                <p className="title">{eachitem.title}</p>
                <p className="domain">{eachitem.domainUrl}</p>
                <button
                  type="button"
                  className="delete-button"
                  data-testid="delete" // Test ID for delete button
                  onClick={() => this.deleteItem(eachitem.id)} // Delete function on click
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    className="delete-icon"
                    alt="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-history">There is no history to show</p> // Paragraph when no items are present
        )}
      </div>
    )
  }
}

export default App
