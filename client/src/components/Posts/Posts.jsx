
import EachPost from './Post/EachPost'
import {useSelector } from 'react-redux'

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  console.log(posts.length)
  return (
    <div>
      <h1>Posts:</h1>
        <div className="flex gap-2">
          {
            posts.map((post,index) => (
              <EachPost key={index} title={post.title} message={post.message} creator={post.creator} id={post.id}/>
            ))
          }
        </div>
    </div>
  )
}

export default Posts