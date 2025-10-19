import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
  return (
    <div>
        <h1>ParentComponent</h1>
        <ChildComponent lanchbox="roti" drink="juice"/>
    </div>
  )
}
