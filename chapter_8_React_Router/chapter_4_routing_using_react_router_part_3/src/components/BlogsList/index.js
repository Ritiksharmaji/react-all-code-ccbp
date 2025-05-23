import {Component} from 'react'
// import Loader from 'react-loader-spinner' it is removed
import { TailSpin } from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// if we are using the above code for spring loading 
//then it will show some error.
import BlogItem from '../BlogItem'
import './index.css'
class BlogsList extends Component {

  state = {
    isLoading: true, 
    blogsData: [],
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    console.log("this is Bloglist page")
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          // <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> it will show some error 
          <TailSpin color="#00BFFF" height={50} width={50} />
        ) : (
          blogsData.map(item => <BlogItem blogData={item} 
            key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogsList
