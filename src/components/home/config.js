import './home.css'
import ativo from '../img/ativo.svg'
import desligado from '../img/desligado.svg'

function Config(props) {
   return(
      <div className="menuConfig">
         <h1 className='tituloConfig'>Configurações</h1>

         <div className='opcoes'>
            <div className='itemConfig'>
               <h1>Temas do Site</h1>
               <div className='itemOpcoes'>
                  <div className='circulo' id='temaPadrao'></div>
                  <div className='circulo' id='temaEscuro'></div>
                  <div className='circulo' id='temaVermelho'></div>
               </div>
            </div>

            <div className='itemConfig'>
               <h1>Tempos</h1>
               <div className='itemOpcoes tempos pomodoro'>
                  <h1>Pomodoro</h1>
                  <h2>25min</h2>
               </div>
               <div className='divMetade'>
               <div className='itemOpcoes tempos pausaCurta'>
                  <h1>Pausa Curta</h1>
                  <h2>5min</h2>
               </div>
               <div className='itemOpcoes tempos pausaLonga'>
                  <h1>Pausa Longa</h1>
                  <h2>15min</h2>
               </div>
               </div>
            </div>

            <div className='itemConfig outros'>
               <h1>Configurações</h1>
               <div className='itemOpcoes configs notificacao'>
                  <h1>Notificações</h1>
                  <div className='escolhas'>
                     <img src={ativo}/>
                     <img src={desligado}/>
                  </div>
               </div>
               <div className='itemOpcoes configs sonsSite'>
                  <h1>Sons do site</h1>
                  <div className='escolhas'>
                     <img src={ativo}/>
                     <img src={desligado}/>
                  </div>
               </div>
            </div>
            
         </div>
      </div> 
   )
}

export default Config