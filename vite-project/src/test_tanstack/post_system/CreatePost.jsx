import './user_posts.css'
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"

function fetchingFunction (postData) {
  return fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(postData)
  }).then(res => res.json())
}

function CreatePost () {
  const [headerText, setHeaderText] = useState("")
  const [bodyText, setBodyText] = useState("")

  const result = useMutation({
    mutationFn: fetchingFunction,
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error)
  })

  function renderResult () {
    if (result.isPending) return <span>Posting...</span>
    if (result.isError) return <span>Something went wrong.</span>
    if (result.isSuccess) return (
      <div>
        <h3>{result.data.title}</h3>
        <p>{result.data.body}</p>
      </div>
    )
  }

  return (
    <>
    <nav className='posting_bar'>
      <form action="POST" onSubmit={(e) => {
        e.preventDefault()
        result.mutate({title: headerText, body: bodyText, userId: 1})
      }}>
        <h1>CREATE POST</h1>
        <input type="text" name="headerText" id="headerText" onChange={(e) => setHeaderText(e.target.value)}/>
        <textarea name="bodyText" id="bodyText" onChange={(e) => setBodyText(e.target.value)}></textarea>
        <button type="submit" className={result.isPending ? 'posting_btn' : 'submit_btn'}>
          {result.isPending ? 'Posting' : 'Submit'}
        </button>
      </form>
    </nav>
    {(result.isPending || result.isError || result.isSuccess) && (
      <main className='posts_container'>
        {renderResult()}
      </main>
    )}
    </>
  )
}

export default CreatePost