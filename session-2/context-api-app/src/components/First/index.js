import React, {useContext} from "react";
import Second from "../Second";
import {CounterContext} from "../../context/CounterContext"

function First() {
  const {count, setCount} = useContext(CounterContext)
  return (
    <>
      <div  onClick={()=>setCount(count => count+1)}>First = {count} </div>
      <Second/>
    </>
  );
}

export default First;
