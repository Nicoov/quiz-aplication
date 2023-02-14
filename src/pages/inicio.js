import { useState } from "react";

function Inicio(props) {
    const [usuario, setUsuario] = useState("");
    const [puntaje, setPuntaje] = useState(0);


    const SessionDataStorage = (e) => {
        e.preventDefault();
        sessionStorage.setItem("usuario", usuario)
        sessionStorage.setItem("puntaje", puntaje)
        console.log(usuario)
        console.log(puntaje)
    }

    return (

        <div className="container-user">
            <form onSubmit={SessionDataStorage}>
                <label>Ingresa tu nick</label>
                <input
                    type="text"
                    placeholder="Ingresa tu nick name"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <button type="submit" onClick={() => (window.location.href = '/quiz')}> Iniciar</button>
            </form>
        </div>

    )


}


export default Inicio;