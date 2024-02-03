import React from "react";
import { useState } from "react";

const TimerControls = ({timerOn, onStart, onStop, onReset, onLap}) => {

  return ( 
    <div className="">
      {!timerOn && <button className="bg-purple-700 m-2 p-2 rounded-xl w-20 items-center hover:bg-purple-900 text-white" onClick={onStart}>Iniciar</button>}
      {timerOn && <button className="bg-purple-700 m-2 p-2 rounded-xl w-20 items-center hover:bg-purple-900 text-white" onClick={onStop}>Parar</button>}
      {timerOn && <button className="bg-purple-700 m-2 p-2 rounded-xl w-20 items-center hover:bg-purple-900 text-white" onClick={onLap}>Volta</button>}
      <button className="bg-purple-700 m-2 p-2 rounded-xl w-20 items-center hover:bg-purple-900 text-white" onClick={onReset}>Zerar</button>
    </div>
  )
}

export default TimerControls