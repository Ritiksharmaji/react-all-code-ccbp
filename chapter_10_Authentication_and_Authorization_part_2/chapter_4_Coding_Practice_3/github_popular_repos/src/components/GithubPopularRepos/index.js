import React, {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'
import RepositoryItem from '../RepositoryItem'
import {ThreeDots} from 'react-loader-spinner'
//import Loader from 'react-loader-spinner'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const global_state = {
  inProgress: 'progress',
  success: 'success',
  error: 'error',
}

class GithubPopularRepos extends Component {
  state = {
    selectedLanguage: 'ALL',
    repositories: [],
    apiStatus: global_state.inProgress,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({apiStatus: global_state.inProgress})
    const url = `https://apis.ccbp.in/popular-repos?language=${this.state.selectedLanguage}`

    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        this.setState({
          repositories: data.popular_repos,
          apiStatus: global_state.success,
        })
      } else {
        this.setState({apiStatus: global_state.error})
      }
    } catch (error) {
      this.setState({apiStatus: global_state.error})
    }
  }

  handleLanguageChange = id => {
    this.setState({selectedLanguage: id}, this.fetchData) // Re-fetch data after updating the language
  }

  renderRepositories = () => {
    const {repositories} = this.state
    return (
      <ul className="repository-list">
        {repositories.map(repo => (
          <RepositoryItem key={repo.id} data={repo} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <ThreeDots color="#0b69ff" height={50} width={50} />
    </div>
   // <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
  )

  render() {
    const {apiStatus} = this.state

    return (
      <div className="repository-container">
        <h1 className="heading-repository-container">Popular</h1>
        <div className="order-list-container">
          {languageFiltersData.map(data => (
            <LanguageFilterItem
              key={data.id}
              onClick={() => this.handleLanguageChange(data.id)}
              data={data}
            />
          ))}
        </div>
        <div className="repository-list-container">
          {apiStatus === global_state.inProgress && this.renderLoadingView()}
          {apiStatus === global_state.success && this.renderRepositories()}
          {apiStatus === global_state.error && (
            <p>Something went wrong. Please try again later.</p>
          )}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
