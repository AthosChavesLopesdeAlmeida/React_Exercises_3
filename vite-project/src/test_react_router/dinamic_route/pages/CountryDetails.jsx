import './countries.css'
import { countries } from "../data"
import { useParams } from "react-router-dom"

const CountryDetails = () => {
  const { nome } = useParams()
  const country = countries.find((c) => c.nome === nome)

  return (
    <div className='details'>
      <h1>{country.nome}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.populacao}</p>
      <img src={country.bandeira} alt="" />
    </div>
  )
}

export default CountryDetails