import { Component } from 'react'
import { TailSpin } from 'react-loader-spinner'

import BlogItem from '../BlogItem'
import './index.css'

class BlogsList extends Component {
  state = {
    blogdata: [],
    IsLoader: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))

    this.setState({
      blogdata: updatedData,
      IsLoader: false,  // Set IsLoader to false after data is fetched
    })
  }

  render() {
    const { blogdata, IsLoader } = this.state
    return (
      <div className="blog-list-container">
        {IsLoader ? (
          <TailSpin color="#00BFFF" height={50} width={50} />
        ) : (
          blogdata.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogsList
