import './hookForm.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const BasicHookForm = () => {
  const [result, setResult] = useState(null)
  const { register, handleSubmit, formState: {isSubmitting} } = useForm()

  const onSubmit = async (dados) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResult(dados)
  }

  return (
    <main>
      <section className='form_container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" {...register('email')}/>
          <input type="password" {...register('password')} />
          <button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </section>
      <section className='result_container'>
        {result && (
          <h3>Seus dados --&gt; Email: {result.email} || Senha:{result.password}</h3>
        )}
      </section>
    </main>
  )
}

export default BasicHookForm