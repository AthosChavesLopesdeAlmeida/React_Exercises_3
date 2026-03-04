import { Routes, Route } from 'react-router-dom'
import CountryList from './test_react_router/dinamic_route/pages/CountryList'
import CountryDetails from './test_react_router/dinamic_route/pages/CountryDetails'

function App() {
  return (
    <Routes>
      <Route path='/' element={<CountryList/>}/>
      <Route path='/pais/:nome' element={<CountryDetails/>}/>
    </Routes>
  )
}

export default App