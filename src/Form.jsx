import { useState } from "react"

export default function Form({onAddUsuario}){
    const [nombre,setNombre] = useState("");
    const [piloto,setPiloto] = useState("");

    const onHandleSubmit= (e)=>{
        e.preventDefault();
        if(nombre && piloto){
            onAddUsuario({nombre,piloto})
            setNombre("")
            setPiloto("")
        }
    }
    

    return(
            <form onSubmit={onHandleSubmit}>
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                <input type="text" placeholder="Piloto favorito" value={piloto} onChange={(e)=>setPiloto(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
    )

}