import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, publishedDate, description} = blogDetails

  return (
    <li>
      <div>
        <p>{title}</p>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
