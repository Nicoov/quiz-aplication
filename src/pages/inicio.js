import { useState } from "react";

function Inicio(props) {
    const [usuario, setUsuario] = useState("");
    const [puntaje, setPuntaje] = useState(0);
    


    const LocalDataStorage = (e) => {
        e.preventDefault();
        localStorage.setItem("usuario", usuario)
        localStorage.setItem("puntaje", puntaje)
    }

    return (

        <div className="container-user">
            <form onSubmit={LocalDataStorage}>
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