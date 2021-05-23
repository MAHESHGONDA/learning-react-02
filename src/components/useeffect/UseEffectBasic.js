import React, { useEffect, useState } from 'react'
//calls after render
//can be used for cleanup

const UseEffectBasic = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('called after render')
  })
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </React.Fragment>
  )
}

export default UseEffectBasic
