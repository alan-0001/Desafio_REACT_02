

import React from "react"

const Contador=()=>{

   const[contagem, setContagem] = React.useState(0)

    function decrement() {
        setContagem(anterior => anterior - 1,)
    }
    function decrement2() {
        setContagem(anterior => anterior - 10,)
    }
    function decrement3() {
        setContagem(anterior => anterior - 100,)
    }
    function increment() {
        setContagem(anterior => anterior + 1,)
    }
    function increment2() {
        setContagem(anterior => anterior + 10,)
    }
    function increment3() {
        setContagem(anterior => anterior + 100,)
    }
   
    return (
        <div>
            <h1>{contagem}</h1>
            <div>
                <p>contador-1</p>
                <button onClick={decrement}>-</button>
                <p>contador-10</p>
                <button onClick={decrement2}>-</button>
                <p>contador-100</p>
                <button onClick={decrement3}>-</button>
                <p>contador+1</p>
                <button onClick={increment}>+</button>
                <p>contador+10</p>
                <button onClick={increment2}>+</button>
                <p>contador+100</p>
                <button onClick={increment3}>+</button>

            </div>
        </div>
    );
    
}

export default Contador