import { useState } from "react";
import Modal from 'react-modal'


function Inicio() {
    const [usuario, setUsuario] = useState("");
    const [openInfo, setOpenInfo] = useState(false)
    // const [puntaje, setPuntaje] = useState(0);

    const OpenModal = () => {
        setOpenInfo(true)
    }

    const handleOpenModal = () => {
        return (
            <Modal
                isOpen={openInfo}
                style={customModal}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setOpenInfo(false)}
                ariaHideApp={false}

            >
                <div className="container">
                    <div className="instrucciones">
                        <h2>Instrucciones 🤓☝</h2>
                        <div className="instrucciones-span">
                            <span>El juego consta de 10 preguntas de conocimiento general 😮</span>
                            <span>Tienes 15 segundos para responder las 10 preguntas, si no respondes, pasaras a la siguiente y se te cobrara como incorrecta 😨</span>
                            <span>Solo existe 1 respuesta correcta</span>
                        </div>
                        <h2>Disfruta 😎</h2>
                    </div>
                </div>

            </Modal>

        )
    }


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
                <div className="container-intructions" onClick={() => OpenModal()}>
                    Instrucciones del juego 🤓
                </div>
                {handleOpenModal()}
            </div>

        </>
    )

}


const customModal = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        border: "none",
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.75)",
    },
};



export default Inicio;