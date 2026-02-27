import './ThemeChange.css'
import { useContext } from "react"
import ThemeContext from "./ThemeContext"

const ThemeChangeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (

    <div className = {`container ${theme}`}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeChangeComponent