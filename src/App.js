import preguntas from './preguntas';
import { useEffect, useState } from 'react';



function App() {
  const [preguntasActual, setPreguntasActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [finished, setFinished] = useState(false);


  const handleAnswerSubmit = (isCorrect, e) => {
    if (isCorrect) {
      setPuntuacion(puntuacion + 1);
    }
    e.target.classList.add(isCorrect ? "correct" : "incorrect")

    if (preguntasActual === preguntas.length - 1) {
      setFinished(true);
    } else {
      setPreguntasActual(preguntasActual + 1)
    }

  }

  return (
    <div className="App">
      <div className='left-side'>
        <div className='answer-number'>
          <span>Pregunta {preguntasActual + 1} de </span> {preguntas.length}
        </div>
        <div className='answer-title'>{preguntas[preguntasActual].titulo}
        </div>
      </div>
      <div className='rigth-side'>
        {preguntas[preguntasActual].opciones.map((respuesta) => (
          <button key={respuesta.Respuesta} onClick={(e) => { handleAnswerSubmit(respuesta.isCorrect, e) }}>{respuesta.Respuesta}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
