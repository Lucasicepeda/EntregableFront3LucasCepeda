//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({usuarios}) {
  return (
      <div>
      <h2>Usuarios</h2>
      {usuarios.map((usuario,index)=>(
          <div key={index}>
          <h3>{usuario.nombre} {usuario.piloto}</h3>
          </div>
      )
          
      )
      }
      </div>
  )

}

export default Card;