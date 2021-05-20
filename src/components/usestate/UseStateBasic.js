import React, { useState } from 'react'

// Hook starts with use
// component must be uppercase
// Hook must be invoked inside function/component body
// don't call hooks conditonally

const UseStateBasic = () => {
  const [text, setText] = useState('Random Title')

  const clickHandler = () => {
    // click handler

    if (text === 'Random Title') {
      setText('Hello World')
    } else {
      setText('Random Title')
    }
  }

  return (
    <React.Fragment>
      <h4>Hook - UseState Basic Example</h4>
      <hr></hr>
      <h5>{text}</h5>
      <button type='button' className='btn' onClick={clickHandler}>
        Click me
      </button>
    </React.Fragment>
  )
}

export default UseStateBasic
