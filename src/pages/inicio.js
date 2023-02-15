import { useState } from "react";

function Inicio() {
    const [usuario, setUsuario] = useState("");
    // const [puntaje, setPuntaje] = useState(0);



    const LocalDataStorage = (e) => {
        e.preventDefault();
        localStorage.setItem("usuario", usuario)
    }

    return (
        <>
            <div className="container-user">
                <form onSubmit={LocalDataStorage}>
                    <label className="nick-style">Ingresa tu nick</label>
                    <input
                        className="input-base"
                        type="text"
                        placeholder="Ingresa tu nick name"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </form>
                <button type="submit" onClick={() => (window.location.href = '/quiz')}><span>Iniciar</span> </button>
            </div>

            <div>
                <div className="container-intructions">
                    Instrucciones del juego 🤓
                </div>
            </div>

        </>

    )


}


export default Inicio;