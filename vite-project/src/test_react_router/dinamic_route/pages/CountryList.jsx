import './countries.css'
import { countries } from '../data'
import { Link } from 'react-router-dom'

const CountryList = () => {
  
  return (
    <nav className='navbar'>
      {countries.map((country) => {
        return (
          <Link to={`/pais/${country.nome}`} className='link' key={country.nome}>{country.nome}</Link>
        )
      })}
    </nav>
  )
}

export default CountryList