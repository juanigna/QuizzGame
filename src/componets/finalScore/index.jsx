import React, { useEffect, useState } from 'react'

const FinalScore = ({score, questions}) => {
    const [winner, setWinner] = useState(false)
    const ganador = questions.length;
    useEffect(()=>{
if(score == ganador){
        setWinner(true);
    }else{
        setWinner(false);
    }
    },[score, winner])
    
  return (
    <div>
        {
        winner ?
        <>
            <h3>Felicidades!!! Eres el ganador: </h3>
        <h3>Puntaje: {score}/{questions.length}</h3>
        <h3>Muchas Gracias por jugar, te espero en la proxima!!! A seguir aprendiendo</h3>
        
        </> :
        <>
         <h3>Tu resultado final fue: </h3>
        <h3>Puntaje: {score}/{questions.length}</h3>
        <h3>Muchas Gracias por jugar, te espero en la proxima!!! A seguir aprendiendo</h3>
        </>  
        }
       <button onClick={() =>window.location.reload(false)}>Volver a jugar!</button>
    </div>
  )
}

export default FinalScore