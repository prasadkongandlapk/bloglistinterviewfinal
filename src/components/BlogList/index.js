import './index.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <ul>
        {blogsList.map(each => (
          <BlogItem key={each.id} blogDetails={each} />
        ))}
      </ul>
    )
  }
}
export default BlogList
