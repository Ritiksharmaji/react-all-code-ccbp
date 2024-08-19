import { Component } from 'react';

import { withRouter } from './withRouter';// Assuming your HOC is in a file called withRouter.js

import './index.css';

// const blogData = {
//   title: 'Blog Name',
//   imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png',
//   avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//   author: 'Author Name',
//   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
// };

class BlogItemDetails extends Component {

  state = {
    blogdata:{}
  }
  componentDidMount() {
    this.getBlogItemData();
  }

  getBlogItemData = async () => {
    const { id } = this.props.router.params;  // Accessing the route parameter
    console.log('Blog ID:', id);
    console.log(this.props)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      title:data.title,
      author:data.author,
      avatarUrl:data.avatar_url,
      content:data.content,
      imageUrl:data.image_url,
      topic:data.topic,
      id:data.id,
    }
    console.log(updatedData)
    // You can now use the `id` to fetch data from an API or perform other actions
    //updating the data
    this.setState({
      blogdata:updatedData,
    })
  };

  renderBlogItemDetails = () => {
    const{blogdata} = this.state
    // const { title, imageUrl, content, avatarUrl, author } = blogData;
    const { title, imageUrl, content, avatarUrl, author } = blogdata;
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>;
  }
}

export default withRouter(BlogItemDetails);
