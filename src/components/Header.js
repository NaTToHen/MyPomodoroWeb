import '../components/header.css'
import Logo from './img/logo.svg'
import MenuConfig from './img/menuConfig.svg'

function Header() {
   return(
      <header className="header">
         <img src={Logo}/>
         <h1 className='nomeApp'>MyPomodoro</h1>
         <img src={MenuConfig} className='btnConfig'/>
      </header>
   )
}

export default Header