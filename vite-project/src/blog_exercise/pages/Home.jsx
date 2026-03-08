import { posts } from "../data/posts"
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <div className="posts_list">
      {posts.map((post) => {
        return (
          <div key={post.id} className="post_container">
            <h1>{post.titulo}</h1>
            <p >{post.conteudo}</p>
            <Link to={`/post/${post.id}`} className="link">Ver mais</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home