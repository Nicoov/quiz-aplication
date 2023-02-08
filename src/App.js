import preguntas from './preguntas';
import { useEffect, useState } from 'react';



function App() {
  const [preguntasActual, setPreguntasActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [finished, setFinished] = useState(false);
  const [TimeRunnig, setTimeRunning] = useState(10);
  const [areDisabled, setDisabled] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false)


  useEffect(() => {
    const intervalo = setInterval(() => {
      if (TimeRunnig > 0) {
        setTimeRunning((prev) => prev - 1);
      }

      if (TimeRunnig === 0) {
        setDisabled(true)
      }

    }, 1000)

    return () => clearInterval(intervalo);
  }, [TimeRunnig])


  const handleAnswerSubmit = (isCorrect, e) => {
    if (isCorrect) {
      setPuntuacion(puntuacion + 1);
    }
    e.target.classList.add(isCorrect ? "correct" : "incorrect")


    setTimeout(() => {
      if (preguntasActual === preguntas.length - 1) {
        setFinished(true);
      } else {
        setPreguntasActual(preguntasActual + 1)
      }
    }, 1500)
  }

  if (finished) {
    return (
      <main className='app'>
        <div className='game-finished'>
          <span> Tus respuesta fueron {puntuacion} de {preguntas.length}</span>
          <button onClick={() => (window.location.href = '/')}> Volver a jugar</button>
          <button onClick={() => { setFinished(false); setShowAnswer(true); setPreguntasActual(0)}}> Ver respuestas</button>
        </div>
      </main>
    )
  }

  if (showAnswer) {
    return <main className='app'>
      <div className='left-side'>
        <div className='answer-number'>
          <span>Pregunta {preguntasActual + 1} de </span> {preguntas.length}
        </div>
        <div className='answer-title'>{preguntas[preguntasActual].titulo}
        </div>
        <div>
          {preguntas[preguntasActual].opciones.filter((opcion) =>
            opcion.isCorrect
          )[0].Respuesta}
        </div>
        <button onClick={() => {
          if (preguntasActual === preguntas.length - 1) {
            window.location.href = "/";
          } else {
            setPreguntasActual(preguntasActual + 1)
          }
        }}> Continuar</button>
      </div>
    </main>
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
      {!areDisabled ? (<span className='time'> Tiempo restante: {TimeRunnig}</span>) : (
        <button onClick={() => {
          setTimeRunning(10);
          setDisabled(false)
          setPreguntasActual(preguntasActual + 1)
        }}>Continuar</button>
      )}
      <div className='rigth-side'>
        {preguntas[preguntasActual].opciones.map((respuesta) => (
          <button
            disabled={areDisabled}
            key={respuesta.Respuesta} onClick={(e) => { handleAnswerSubmit(respuesta.isCorrect, e) }}>{respuesta.Respuesta}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
