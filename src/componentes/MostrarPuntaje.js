import React, { useState, useEffect } from "react"


export const MostrarPuntajes = () => {
    const [usuario, setUsuario] = useState("");
  
    const getUser = () => {
        return localStorage.getItem('usuario')
    }

    useEffect(() => {
        setUsuario(getUser());
    }, []);

    return (
        <main className='App'>
            <div className='game-finished'>
                <span> Ranking global usuarios</span>
                <span> {usuario} </span>
                <button onClick={() => (window.location.href = '/')}> Volver a jugar</button>
            </div>
        </main>
        
    )


}