import './home.css'

function Config() {
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
         </div>
      </div> 
   )
}

export default Config