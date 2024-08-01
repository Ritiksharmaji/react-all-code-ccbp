import { Component } from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const intialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {

  state = {

    searchInput: "",
    searchUserList: intialuserDetailsList
  }

  onchangeSearch = (event) => {

    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })

  }
  deleteUser = (number) => {
    console.log("user deleted with id:" + number)
    // to get the user which don't match the id 
    const { searchUserList } = this.state
    const filteredUserData = searchUserList.filter(
      each => each.uniqueNo != number
    )

    this.setState(
      {
        searchUserList: filteredUserData
      }
    )


  }

  render() {
    const { searchInput, searchUserList } = this.state;
    console.log("this is searchInput value:" + searchInput)

    const searchUser = searchUserList.filter((eachuser) => {

      const detils = eachuser.name.includes(searchInput)
      return detils;
    })


    return (
      <div className="app-container">


        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.onchangeSearch} value={searchInput} />
        <ul className="list-container">
          {/* {userDetailsList.map(eachUser => (
            <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} />
          ))} */}
          {searchUser.map(eachUser => (
            <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} deleteuser={this.deleteUser} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
