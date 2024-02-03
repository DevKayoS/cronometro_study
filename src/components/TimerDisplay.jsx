import React from "react";
import { useState } from "react";

const TimerDisplay = ({time}) => {
  return ( 
    <div className="border-2 border-zinc-600 p-7 m-5 text-5xl">
      {time}
    </div>
  )
}

export default TimerDisplay