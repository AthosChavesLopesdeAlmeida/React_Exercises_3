import { posts } from "../data/posts"
import { useParams } from "react-router-dom"

const PostDetail = () => {
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number(id))

  return (
    <div className="posts_list">
      <div className="post_container">
        <h1>{post.titulo}</h1>
        <p>{post.conteudo}</p>
        <p>Postado em: 19/02/2015 - 04:33</p>
        <p>Autor: Claude AI</p>
      </div>
    </div>
  )
}

export default PostDetail