import React, {useState, useEffect} from 'react'
import logo from '../images/svg-logo.svg'

const Header = () => {
  const [menuSwitch, setMenuSwitch] = useState(false)

  useEffect(() => {
    console.log("Menu Open: ", menuSwitch)
  }, [menuSwitch])

  const menuSwitchHandler = () => {
    setMenuSwitch(!menuSwitch)
  }

  return(
    <header>
      <nav>
        <div>
          <a href="/"><img src={logo} alt="svg logo" /></a>
          <button
            onClick = {()=> menuSwitchHandler()}
          >
            Menu { menuSwitch ? "X" : "\u2630" }
          </button>
        </div>
        <div>
          { menuSwitch && (
              <>
                <a href="/">this is an anchor tag</a>
                <button>this is a button</button>
              </>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Header