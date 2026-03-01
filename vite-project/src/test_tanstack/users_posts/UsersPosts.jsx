import './posts.css'
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

function fetchFunc () {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
}

const UsersPosts = () => {
  const [selectedUser, setSelectedUser] = useState(null)

  const userListResult = useQuery({
    queryKey: ['users'],
    queryFn: fetchFunc
  })

  const postsListResult = useQuery({
    queryKey: ['posts', selectedUser],
    enabled: selectedUser === null ? false : true,
    queryFn: () => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser}`).then(res => res.json())
  })

  function renderPosts () {
    if (selectedUser === null) return <p>Chose a user</p>
    if (postsListResult.isLoading) return <p>Loading...</p>
    if (postsListResult.isError) return <p>Something went wrong.</p>

    return postsListResult.data.map(post =>
      <div key={post.id} className='post'>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    )
  }

  if (userListResult.isError) return <p>Somethin went wrong.</p>
  if (userListResult.isLoading) return <p>Loading...</p>

  return (
    <main className='main_container'>
      <section className='side_bar'>
        <h1>USERS</h1>
        {userListResult.data?.map((user) => {
        return (
            <div key={user.id} onClick={() => setSelectedUser(user.id)} className='user_btn'>
              <h3>{user.name}</h3>
            </div>
          )
      })}
      </section>
      <section className='post_container'>
        <h1>POSTS</h1>
        {renderPosts()}
      </section>
    </main>
  )
}

export default UsersPosts