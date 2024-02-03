import React from "react";
import { useState, useEffect } from "react";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";
import LapList from "./LapList";

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [laps, setLaps] = useState([])

  const formatTimer = () => {
    const hours = ("0" + Math.floor(milliseconds/3600000)%60).slice(-2)
    const minutes = ("0" + Math.floor(milliseconds/60000)% 60).slice(-2)
    const seconds = ("0" + Math.floor(milliseconds/1000)%60).slice(-2)
    const centiseconds = ("0" + Math.floor(milliseconds/10)%100).slice(-2)
    
    return `${hours}:${minutes}:${seconds}:${centiseconds}`
  }
  
  const startTimer = (interval) => {
    return setInterval(()=>{
      setMilliseconds(prevMilliseconds => prevMilliseconds + 10)
    }, 10)
  }
  const stopTimer = (interval) => {
    clearInterval(interval)
    return interval
  }

  const resetTimer = () => {
    setMilliseconds(0)
    setTimerOn(false)
    setLaps([])
  }

  const addLap = () => {
    setLaps([...laps, formatTimer()])
  }

  useEffect(()=>{
    let interval = null

    if(timerOn){
      interval = startTimer(interval)
    } else {
      interval = stopTimer(interval)
    }
    return () => stopTimer(interval)
  }, [timerOn])

 

  return ( 
    <div>
      <div className="text-xl flex flex-col min-h-3.5 mt-8 p-20 w-auto bg-gray-300 rounded-lg place-items-center" >
        <TimerDisplay time={formatTimer()}/>
        <TimerControls 
        timerOn={timerOn}
        onStart={()=> setTimerOn(true)}
        onStop={()=> setTimerOn(false)}
        onReset={() => resetTimer()}
        onLap={addLap}
        />
        <LapList laps={laps}/>
      </div>
    
    </div>
    )
  }
  
  export default Timer
