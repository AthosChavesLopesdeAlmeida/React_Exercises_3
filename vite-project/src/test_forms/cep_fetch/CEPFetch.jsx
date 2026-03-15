import './cep.css'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  cep: z.string().refine(v => v.replace(/\D/g, '').length === 8, 'CEP inválido'),
  logradouro: z.string(),
  bairro: z.string(),
  cidade: z.string()
})

const CEPFetch = () => {
  const [erro, setErro] = useState(null)
  const [result, setResult] = useState(null)

  const { register, watch, setValue, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const cep = watch('cep')

  useEffect(() => {
    const buscaDeCep = async () => {
      const cleanCEP = cep?.replace(/\D/g, '')

      if (cleanCEP?.length === 8) {
        const resposta = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`)
        const dados = await resposta.json()

        if (dados.erro) {
          setErro('CEP não encontrado')
        } else {
          setErro(null)
          setValue('logradouro', dados.logradouro)
          setValue('bairro', dados.bairro)
          setValue('cidade', dados.localidade)
        }
      }
    }

    buscaDeCep()
  }, [cep, setValue])

  const onSubmit = async (dados) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResult(dados)
  }

  return (
    <div className='form_container'>
      {result ?
        <pre>{JSON.stringify(result, null, 2)}</pre> :

        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Digite um CEP:</h2>
          <input type="text" {...register('cep')} placeholder='CEP:' />
          {errors.cep && <span>{errors.cep.message}</span>}
          {erro && <span>{erro}</span>}
          <input type="text" {...register('logradouro')} readOnly placeholder='Logradouro' />
          <input type="text" {...register('bairro')} readOnly placeholder='Bairro' />
          <input type="text" {...register('cidade')} readOnly placeholder='Cidade' />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      }
    </div>
  )
}

export default CEPFetch