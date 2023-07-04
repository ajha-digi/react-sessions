import { useState } from "react";


function Counter(){

    const [count, setCount] = useState(0);
    return (
        <section>
        <h1>Counter App</h1>
        <div>
            <button onClick={()=>setCount(count+1)}>+</button>
            <span>{count}</span>
            <button onClick={()=>setCount(count-1)} >-</button>
        </div> 
    </section>
    )
}

export default Counter;