import Header from '../Header.js'
import Config from './config.js'
import './home.css'
import BotaoAcao from './botaoAcao.js'

import Pomodoro from '../img/pomodoro.svg'
import Curta from '../img/pausaCurta.svg'
import Longa from '../img/pausaLonga.svg'

function Home() {
   return (
      <div className='container'>
         <Header />
         <main id="home">
            <div className='containerTimer'>
               <h1 className='tempoTimer'>25:00</h1>
            </div>
            <h1 className='btnIniciar'>Clique no timer para iniciar</h1>
            <div className='btnAcoes'>
               <BotaoAcao
                  foto={Pomodoro}
                  texto="Pomodoro"
                  />
               <BotaoAcao
                  foto={Curta}
                  texto="Pausa Curta"
                  />
               <BotaoAcao
                  foto={Longa}
                  texto="Pausa Longa"
                  />
            </div>
         </main>

         <Config/>
         
      </div>
   )
}

export default Home