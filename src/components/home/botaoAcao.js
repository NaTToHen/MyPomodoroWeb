import './home.css'

function BotaoAcao(props) {
   return(
      <div className="btnAcao">
         <img src={props.foto}/>
         <h2 className="textoBtn" id={props.texto}>{props.texto}</h2>
      </div>
   )
}

export default BotaoAcao