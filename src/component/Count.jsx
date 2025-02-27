import React, { useState } from 'react'

function Count(props) {


  let [count,setCount] = useState(0);
  function decre(){ 
    setCount(--count); 
  }
  function incre(){ 
    setCount(++count); 
  }

  return (
    <>
        ex) {props.title}
        <div>
          <button onClick={decre}>감소</button>
          <span>{count}</span>
          <button onClick={incre}>증감</button>
        </div>
    </>
  )
}

export default Count