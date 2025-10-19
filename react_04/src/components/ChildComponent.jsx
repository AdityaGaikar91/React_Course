import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <h1>ChildComponent</h1>
        <h2>{props.lanchbox}</h2>
        <h2>{props.drink}</h2>
    </div>
  )
}
