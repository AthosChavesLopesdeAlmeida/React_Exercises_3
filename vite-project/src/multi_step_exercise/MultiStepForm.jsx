import './multi.css'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

const completeSchema = z.object({
  // Step 1
  nome: z.string().min(3, 'O nome deve ter ao menos 3 caracteres'),
  email: z.email('E-mail inválido'),
  cpf: z.string().refine(v => v.replace(/\D/g, '').length === 11, 'CPF inválido'),
  telefone: z.string().refine(v => v.replace(/\D/g, '').length === 11, 'Telefone inválido'),
  // Step 2
  cep: z.string().refine(v => v.replace(/\D/g, '').length === 8, 'CEP inválido'),
  logradouro: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  // Step 3
  tema: z.string().min(1, 'Selecione um tema'),
  idioma: z.string().min(1, 'Selecione um idioma'),
  notificacoes: z.boolean()
})

const maskTelefone = (valor) => {
  return valor
    .replace(/\D/g, '')                   
    .replace(/(\d{2})(\d)/, '($1) $2')    
    .replace(/(\d{5})(\d)/, '$1-$2')       
    .slice(0, 15)                          
}

const maskCPF = (valor) => {
  return valor  
    .replace(/\D/g, '')                  
    .replace(/(\d{3})(\d)/, '$1.$2')     
    .replace(/(\d{3})(\d)/, '$1.$2')     
    .replace(/(\d{3})(\d{1,2})/, '$1-$2') 
    .slice(0, 14)             
}

const Step1DadosPessoais = ({register, control, errors}) => {
    return (
      <div>
        <input type="text" {...register('nome')} />
        {errors.nome && <span>{errors.nome.message}</span>}
        <input type="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
        <Controller
          name='cpf'
          control={control}
          render={({field}) => {
            return <input {...field} onChange={(e) => field.onChange(maskCPF(e.target.value))} placeholder='CPF: '/>
          }}
        />
        {errors.cpf && <span>{errors.cpf.message}</span>}
        <Controller 
          name='telefone'
          control={control}
          render={({field}) => {
            return <input {...field} onChange={(e) => field.onChange(maskTelefone(e.target.value))} placeholder='Telefone: '/>
          }}
        />
        {errors.telefone && <span>{errors.telefone.message}</span>}
      </div>
  )
}

const Step2Endereco = ({register, watch, setValue, errors}) => {
  const [erro, setErro] = useState(null)
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


  return (
    <div>
      <input type="text" {...register('cep')} placeholder='CEP'/>
      {errors.cep && <span>{errors.cep.message}</span>}
      {erro && <span>{erro}</span>}
      <input type="text" {...register('logradouro')} readOnly/>
      <input type="text" {...register('bairro')} readOnly/>
      <input type="text"  {...register('cidade')} readOnly/>
    </div>
  )
}

const Step3Preferencias = ({register, errors}) => {
  return (
    <div>
      <select {...register('tema')}>
        <option value="">Selecione um tema</option>
        <option value="claro">Claro</option>
        <option value="escuro">Escuro</option>
      </select>
      {errors.tema && <span>{errors.tema.message}</span>}

      <select {...register('idioma')}>
        <option value="">Selecione um idioma</option>
        <option value="portugues">Português</option>
        <option value="espanhol">Espanhol</option>
      </select>
      {errors.idioma && <span>{errors.idioma.message}</span>}

      <label>
        <input type="checkbox" {...register('notificacoes')} />
          Receber notificações
        </label>
      {errors.notificacoes && <span>{errors.notificacoes.message}</span>}
    </div>
  )
}


const MultiStepForm = () => {
  const [step, setStep] = useState(1)
  const [final, setFinal] = useState(false)
  const {trigger, register, control, watch, setValue, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    resolver: zodResolver(completeSchema)
  })

  const onSubmit = async (dados) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(dados)
    setFinal(true)
  }

  const avancar = async () => {
    const campos = {
      1: ['nome', 'email', 'cpf', 'telefone'],
      2: ['cep', 'logradouro', 'bairro', 'cidade']
    }

    const valido = await trigger(campos[step])
    if (valido) setStep(step + 1)
  }

  return (
    <div className='form_container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <Step1DadosPessoais register={register} control={control} errors={errors}/>
        )}

        {step === 2 && (
          <Step2Endereco register={register} watch={watch} setValue={setValue} errors={errors}/>
        )}

        {step === 3 && (
          <Step3Preferencias register={register} errors={errors}/>
        )}

        {step > 1 && (
          <button type='button' onClick={() => setStep( step - 1)}>Voltar</button>
        )}

        {step < 3 && step >= 1&& (
          <button type='button' onClick={avancar}>Avançar</button>
        )}

        {step === 3 && (
          <button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        )}
      </form>

      {final && (
        <h2>Dados enviados com sucesso!</h2>
      )}
    </div>
  )
}

export default MultiStepForm