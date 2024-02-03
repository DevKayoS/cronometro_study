import React from "react";
import { useState } from "react";

const LapList = ({laps,}) => {
  return ( 
    <div className="w-96">
     <h3 className="flex justify-center items-center ">Voltas:</h3>
      <ul className="flex flex-wrap text-base odd:bg-gray-100 justify-center items-center">
        {laps.map((lap, index)=>
          <li className="border-b-2 border-black p-2 odd:bg-gray-100" key={index}>Volta {index + 1}: {lap}</li>
        )}
      </ul>
    </div>
  )
}

export default LapList