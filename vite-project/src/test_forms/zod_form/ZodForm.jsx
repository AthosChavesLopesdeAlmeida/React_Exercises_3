import './zod.css'
import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  nome: z.string().min(3, 'O nome deve ter mais de 3 caracteres'),
  email: z.email('E-mail inválido'),
  senha: z.string().min(8, 'A senha deve ter ao menos 8 caracteres'),
  confirmarSenha: z.string().min(8)
}).refine((dados) => dados.senha === dados.confirmarSenha, {
  message: 'As senhas não coincidem',
  path: ['confirmarSenha']
})

const ZodForm = () => {
  const [result, setResult] = useState(null)

  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (dados) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResult(dados)
  }

  return (
    <div className='form_container'>
      {result ?
        <h2>Dados enviados com sucesso</h2> :

        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Envie seus dados</h2>
          <input type="text" {...register('nome')} placeholder='Nome:' />
          {errors.nome && <span>{errors.nome.message}</span>}
          <input type="email" {...register('email')} placeholder='E-mail:' />
          {errors.email && <span>{errors.email.message}</span>}
          <input type="password" {...register('senha')} placeholder='Senha:' />
          {errors.senha && <span>{errors.senha.message}</span>}
          <input type="password" {...register('confirmarSenha')} placeholder='Confirmar senha:' />
          {errors.confirmarSenha && <span>{errors.confirmarSenha.message}</span>}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>}
    </div>
  )
}

export default ZodForm