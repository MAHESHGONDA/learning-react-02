import React, { useEffect, useState } from 'react'

const UseEffectWithDependency = () => {
  const [value, setState] = useState(0)

  //empty array means render only one time when render happens
  useEffect(() => {
    // logic here
  }, [])

  //everytime value changes it will call this

  useEffect(() => {
    // logic here
  }, [value])
  return <h1>Dependency</h1>
}

export default UseEffectWithDependency
