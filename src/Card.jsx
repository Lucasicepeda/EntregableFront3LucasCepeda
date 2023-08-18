//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import './Card.css'


function Card({usuarios}) {
    return (
        <div>
        <h2>Respuestas</h2>
        {usuarios.map((usuario,index)=>(
            <div key={index}>
            <h3> Hola {usuario.nombre}!, tu piloto favorito es: {usuario.piloto}</h3>
            </div>
        )  
        )
        }
        </div>
    )

  }
  
  export default Card; 