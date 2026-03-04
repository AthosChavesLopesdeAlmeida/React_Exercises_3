import './dashboard.css'
import { useState } from "react"
import { useQuery, useQueryClient } from '@tanstack/react-query'

function fetchUserFunction () {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
}

function fetchPostFunction (currentPage, selectedUser) {
  if (selectedUser) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10&userId=${selectedUser}`)
      .then(res => res.json())
  } else {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`)
      .then(res => res.json())
  }
}

function fetchPostDetailsFunction (selectedPost) {
  return fetch (`https://jsonplaceholder.typicode.com/posts/${selectedPost}`)
    .then(res => res.json())  
}

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPost, setSelectedPost] = useState(null)
  const queryClient = useQueryClient()

  const usersResult = useQuery({
    queryKey: ['users'],
    queryFn: fetchUserFunction
  })

  const postsResult = useQuery({
    queryKey: ['posts', selectedUser, currentPage],
    queryFn: () => fetchPostFunction(currentPage, selectedUser)
  })

  const postDetailsResult = useQuery({
    queryKey: ['postDetails', selectedPost],
    enabled: selectedPost === null ? false : true,
    queryFn: () => fetchPostDetailsFunction(selectedPost)
  })


  function renderDetails () {
    if (selectedPost === null) return null
    if (postDetailsResult.isLoading) return <p>Loading...</p>
    if (postDetailsResult.isError) return <p>Something went wrong</p>
    return (
      <div>
        <h4>{postDetailsResult.data.title}</h4>
        <p>{postDetailsResult.data.body}</p>
      </div>
    )
  }


  if (usersResult.isLoading) return <h4>Loading...</h4>
  if (usersResult.isError) return <h4>Something went wrong</h4>

  if (postsResult.isLoading) return <h4>Loading...</h4>
  if (postsResult.isError) return <h4>Something went wrong</h4>

  return (  
    <main>

      <header className='page_header'>
        <select name="user_filter" id="user_filter" onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
          <option value="">All</option>
          {usersResult.data.map((user) => {
            return (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            )
          })}
        </select>
        <h1>Posts Dashboard</h1>
        <button onClick={() => queryClient.invalidateQueries({queryKey: ['posts']})}>Refresh</button>
      </header>

      <article className='page_info'>
        <section className='page_posts'>
          {postsResult.data.map((post) => {
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => setSelectedPost(post.id)}>Details</button>
              </div>
            )
          })}
        </section>

        <section className='post_details'>
          {renderDetails()}
        </section>
      </article>

      <footer className='page_footer'>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        <span>{currentPage}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </footer>
    </main>
  )  
}

export default Dashboard  