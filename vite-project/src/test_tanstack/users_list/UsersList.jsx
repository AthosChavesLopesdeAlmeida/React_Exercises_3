import './users_list.css'
import { useQuery } from "@tanstack/react-query"

function fetchFunc () {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
}

const UsersList = () => {

  const result = useQuery({
    queryKey: ['users'],
    queryFn: fetchFunc
  })

  if (result.isError) return <p>Somethin went wrong.</p>
  if (result.isLoading) return <p>Loading...</p>

  return (
    <main className='users_container'>
      {result.data?.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        )
      })}
    </main>
  )
}

export default UsersList