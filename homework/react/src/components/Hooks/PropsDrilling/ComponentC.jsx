import React from 'react'
import ComponentD from "./ComponentD";

function ComponentC() {
  return (
    <div className='box'>
        <h1>Component C</h1>
        <ComponentD title="Hello React" color="red"/>
    </div>
  )
}

export default ComponentC;