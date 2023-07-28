import './index.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {blogList} = this.props

    return (
      <ul>
        {blogList.map(each => (
          <BlogItem blogDetails={each} />
        ))}
      </ul>
    )
  }
}
export default BlogList
