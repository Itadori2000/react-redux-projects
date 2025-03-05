import React from 'react'
import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className='box'>
        <h1>Component B</h1>
        <ComponentC title="Hello React" color="red"/>
    </div>
  )
}

export default ComponentB;