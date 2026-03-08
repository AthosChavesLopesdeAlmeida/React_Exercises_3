import React from 'react'

const CreatePost = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const titulo = e.target.titulo.value
    const conteudo = e.target.conteudo.value
    console.log(`${titulo}: ${conteudo}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Título</label>
        <input type="text" name="titulo" id="titulo" />

        <label htmlFor="conteudo">Conteúdo</label>
        <input type="text" name="conteudo" id="conteudo" />

        <button type='submit'>Postar</button>
      </form>
    </div>
  )
}

export default CreatePost