import React, {useContext} from 'react'
import {CounterContext} from "../../context/CounterContext"

function Third() {
  const {count, setCount} = useContext(CounterContext);
  return (
    <div onClick={()=>setCount(count => count+1)} >Third = {count}</div>
    
  )
}

export default Third