import preguntas from '../preguntas'
import { MostrarPuntajes } from '../componentes/MostrarPuntaje'
import { useEffect, useState } from 'react';



function Quiz() {
  const [preguntasActual, setPreguntasActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [finished, setFinished] = useState(false);
  const [TimeRunnig, setTimeRunning] = useState(15);
  const [areDisabled, setDisabled] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false)
  const [showUsers, setShowUsers] = useState(false)
  const [usuario, setUsuario] = useState("");


  const getUser = () => {
    return localStorage.getItem('usuario')
  }

  useEffect(() => {
    setUsuario(getUser());
  }, []);


  useEffect(() => {  // Este useEffect crea un intervalo de tiempo de 1 segundo, donde cada vez que se ejecuta se disminuye el valor del timerunning 
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



  //Este código es una función que maneja la presentación de respuestas a un cuestionario. 
  //Si la respuesta dada es correcta, se aumenta el puntaje y se agrega la clase "correct" al elemento. Después de 1,5 segundos,
  //si el usuario ha respondido todas las preguntas, el juego termina; de lo contrario, se avanza a la siguiente pregunta y el tiempo se reinicia.

  const handleAnswerSubmit = (isCorrect, e) => {
    if (isCorrect) {
      setPuntuacion(puntuacion + 1);
      console.log(puntuacion)
    }
    e.target.classList.add(isCorrect ? "correct" : "incorrect")


    setTimeout(() => {
      if (preguntasActual === preguntas.length - 1) {
        setFinished(true);
      } else {
        setPreguntasActual(preguntasActual + 1)
        setTimeRunning(10);
      }
    }, 1500)
  }

  if (finished) {
    return (
      <main className='App'>
        <div className='game-finished'>
          <span> {usuario} Tus respuesta fueron {puntuacion} de {preguntas.length}</span>
          <button onClick={() => (window.location.href = '/')}> Volver a jugar</button>
          <button onClick={() => { setFinished(false); setShowAnswer(true); setPreguntasActual(0) }}> Ver respuestas</button>
        </div>
      </main>
    )
  }

  if (showUsers) {
    return <MostrarPuntajes />
  }

  if (showAnswer) {
    return <main className='App'>
      <div className='left-side'>
        <div className='answer-number'>
          <span>Pregunta {preguntasActual + 1} de  {preguntas.length} </span>
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
          <span>Pregunta {preguntasActual + 1} de {preguntas.length} </span>
        </div>
        <div className='answer-title'>{preguntas[preguntasActual].titulo}
        </div>
        <span className='time'> Tiempo restante: {TimeRunnig}</span>
      </div>

      <div className='rigth-side'>
        {preguntas[preguntasActual].opciones.map((respuesta) => (
          <button
            disabled={areDisabled}
            key={respuesta.Respuesta} onClick={(e) => { handleAnswerSubmit(respuesta.isCorrect, e) }}>{respuesta.Respuesta}</button>
        ))}
      </div>
      {!areDisabled || <button className='button-continue' onClick={() => {
        setTimeRunning(10);
        setDisabled(false)
        if (preguntasActual === preguntas.length - 1) {
          setFinished(true)
        } else {
          setPreguntasActual(preguntasActual + 1)
        }
      }}>Continuar</button>}
      {/* {!areDisabled ? (<span className='time'> Tiempo restante: {TimeRunnig}</span>) : (
        <button className='button-continue' onClick={() => {
          setTimeRunning(10);
          setDisabled(false)
          if (preguntasActual === preguntas.length - 1) {
            setFinished(true)
          } else {
            setPreguntasActual(preguntasActual + 1)
          }
        }}>
          Continuar</button>
      )} */}
    </div>
  );
}

export default Quiz;
