import React, { useState } from 'react'

const UseStateBasic = () => {
  const [text, setText] = useState('Random Title')

  const clickHandler = () => {
    // click handler
    setText('hello world')
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
