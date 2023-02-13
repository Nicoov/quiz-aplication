import { useState } from "react";

function Inicio() {
    const [usuario, setUsuario] = useState("");


    const SessionDataStorage = (e) => {
        e.preventDefault();
        sessionStorage.setItem("usuario", usuario)
        console.log(usuario)
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
                <button type="submit"> Iniciar</button>
            </form>
        </div>

    )


}


export default Inicio;