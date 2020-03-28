import React, {useState, useEffect} from 'react'
import logo from '../images/svg-logo.svg'

const Header = () => {
  const [menuSwitch, setMenuSwitch] = useState(false)
  const [darkSwitch, setDarkSwitch] = useState(false)
  const [toggleString, setToggleString] = useState("switch")



  useEffect(() => {
    console.log("Menu Open: ", menuSwitch)
  }, [menuSwitch])

  useEffect(() => {
    console.log("Dark Mode: ", darkSwitch)
    setToggleString(darkSwitch ? "switch on" : "switch")
  }, [darkSwitch])

  const menuSwitchHandler = (e) => {
    e.preventDefault()
    setMenuSwitch(!menuSwitch)
  }

  const darkSwitchHandler = (e) => {
    e.preventDefault()
    setDarkSwitch(!darkSwitch)
  }

  return(
    <header>
      <nav>
        <div>
          <a href="/"><img src={logo} alt="svg logo" /></a>
        </div>
        <div>
          <button
            onClick = {(e)=> menuSwitchHandler(e)}
          >
            Menu { menuSwitch ? "X" : "\u2630" }
          </button>
          { menuSwitch && (
              <>
                <a href="/">this is an anchor tag</a>
                <button>this is a button</button>
                <button
                  className="toggle"
                  onClick={(e)=> darkSwitchHandler(e)}
                >
                  <p>DarkMode:</p>
                  <div className={toggleString}>
                    <p>
                    {
                      darkSwitch ? "on" : "off"
                    }
                    </p>
                    <div></div>
                  </div>
                </button>
              </>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Header