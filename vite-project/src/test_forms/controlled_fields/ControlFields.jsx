import './control.css'
import { z } from 'zod'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  cpf: z.string().refine(v => v.replace(/\D/g, '').length === 11, 'CPF inválido'),
  telefone: z.string().refine(v => v.replace(/\D/g, '').length === 11, 'Telefone inválido')
})

const ControlFields = () => {
  const [result, setResult] = useState(null)
  const { control, handleSubmit, formState: { isSubmitting, errors} } = useForm({
    resolver: zodResolver(schema)
  })

  const maskCPF = (valor) => {
    return valor  
      .replace(/\D/g, '')                  
      .replace(/(\d{3})(\d)/, '$1.$2')     
      .replace(/(\d{3})(\d)/, '$1.$2')     
      .replace(/(\d{3})(\d{1,2})/, '$1-$2') 
      .slice(0, 14)             
  }

  const maskTelefone = (valor) => {
    return valor
      .replace(/\D/g, '')                   
      .replace(/(\d{2})(\d)/, '($1) $2')    
      .replace(/(\d{5})(\d)/, '$1-$2')       
      .slice(0, 15)                          
  }


  const onSubmit = async (dados) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResult(dados)
  }

  return (
    <div className='form_container'>
      {result ?
        <h2>Dados enviados com sucesso</h2> :

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='cpf'
            control={control}
            render={({field}) => {
              return <input {...field} onChange={(e) => field.onChange(maskCPF(e.target.value))} placeholder='CPF: '/>
            }}/>
          {errors.cpf && <span>{errors.cpf.message}</span>}
          <Controller
            name='telefone'
            control={control}
            render={({field}) => {
              return <input {...field} onChange={(e) => field.onChange(maskTelefone(e.target.value))} placeholder='Telefone: '/>
            }}/>
          {errors.telefone && <span>{errors.telefone.message}</span>}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      }
    </div>
  )
}

export default ControlFields