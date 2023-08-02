import React, {useContext} from 'react'
import {CounterContext} from "../../context/CounterContext"

function Second() {
  const {count, setCount} = useContext(CounterContext)
  return (
    <div onClick={()=>setCount(count => count-1)} >Second ={count} </div>
  )
}

export default Second