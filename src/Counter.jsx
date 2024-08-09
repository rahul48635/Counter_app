import React ,{useState}from 'react'


function Counter() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
  return (
    <>
    <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
      Count X: {X} is {X%2===0?"Even":"Odd"}  <br /><br />
      <button onClick={()=>setX(X+1)}>Increment</button> <br />
      <button onClick={()=>setX(X-1)}>Decrement</button>
    </div><br />
    <div style={{position:"absolute",top:"70%",left:"50%",transform:"translate(-50%,-50%)"}}>
      Count Y: {Y} is {Y%2===0?"Even":"Odd"} <br /><br />
      <button onClick={()=>setY(Y+1)}>Increment</button> <br />
      <button onClick={()=>setY(Y-1)}>Decrement</button> 
    </div>
    </>
  )
}

export default Counter
