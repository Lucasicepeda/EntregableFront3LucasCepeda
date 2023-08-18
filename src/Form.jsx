import { useState } from "react"

export default function Form({ onAddUsuario }) {
    const [piloto, setPiloto] = useState("");
    const [nombre, setNombre] = useState("");

    
    const validarPiloto = (piloto) => {
        if (piloto.length > 5) {
            return true;
        } else {
            return false;
        }
    };
    const validarNombre = (nombre) => {
        const sinEspacios = nombre.trim();
        if (sinEspacios.length > 2) {
            return true;
        } else {
            return false;
        }
    };


    const onHandleSubmit = (e) => {
        e.preventDefault();
        const nombreValido = validarNombre(nombre);
        const pilotoValido = validarPiloto(piloto);
        if (!nombreValido || !pilotoValido) {
            alert("Por favor, revisá los datos cargados. Recordá que tu nombre tiene que ser mayor a 2 caracteres y el nombre de tu piloto debe contener 6 caracteres");
        } else {
            onAddUsuario({ nombre, piloto })
            setNombre("")
            setPiloto("")
        }
    }


    return (
        <form onSubmit={onHandleSubmit}>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder="Piloto favorito" value={piloto} onChange={(e) => setPiloto(e.target.value)} />
            <button type="submit">Enviar</button>
        </form>
    )

}