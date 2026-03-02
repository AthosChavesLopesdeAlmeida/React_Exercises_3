import { useState } from "react"
import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query'

function editPost(postData) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postData.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  }).then(res => res.json())
}

const EditPosts = () => {
  const queryClient = useQueryClient()
  const [postID, setPostID] = useState(null)
  const [postTXT, setPostTXT] = useState('')

  const postResult = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(res => res.json())
  })

  const editPostResult = useMutation({
    mutationFn: editPost,
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['posts']})
  })

  if (postResult.isLoading) return <span>Loading...</span> 
  if (postResult.isError) return <span>Something went wrong</span>

  function handleEdit(post) {
    setPostID(post.id)
    setPostTXT(post.title)
  }

  function handleSave(post) {
    editPostResult.mutate({ id: post.id, title: postTXT })
    setPostID(null)
  }

  return (
    <div>
      {postResult.data.map((post) => (
        <div key={post.id}>
          {postID === post.id ? (
            <>
              <input value={postTXT} onChange={(e) => setPostTXT(e.target.value)}/>
              <button onClick={() => handleSave(post)}>Salvar</button>
            </>
          ) : (
            <>
              <h3>{post.title}</h3>
              <button onClick={() => handleEdit(post)}>Editar</button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default EditPosts