import React from 'react'
import UseStateBasic from './components/usestate/UseStateBasic'
import UseStateArray from './components/usestate/UseStateArray'
import UseEffectWithDependency from './components/useeffect/UseEffectWithDependency'

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <UseEffectWithDependency></UseEffectWithDependency>
      </div>
    </React.Fragment>
  )
}

export default App
