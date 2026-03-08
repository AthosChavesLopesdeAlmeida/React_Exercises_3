import { posts } from '../data/posts'
import { useParams } from "react-router-dom"

const EditPost = () => {
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number(id))

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const content = e.target.content.value
    console.log(`${title}: ${content}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" defaultValue={post.titulo}/>

        <label htmlFor="content">Content</label>
        <input type="text" name="content" id="content"  defaultValue={post.conteudo}/>

        <button type='submit'>Edit</button>
      </form>
    </div>
  )
}

export default EditPost