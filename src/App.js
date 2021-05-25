import React from 'react'
import UseStateBasic from './components/usestate/UseStateBasic'
import UseStateArray from './components/usestate/UseStateArray'
import UseEffectWithDependency from './components/useeffect/UseEffectWithDependency'
import UseEffectFetch from './components/useeffect/UseEffectFetch'

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <UseEffectFetch></UseEffectFetch>
      </div>
    </React.Fragment>
  )
}

export default App
