import React from 'react'

const InputText = (props) => {
  return (
    <input type={props.type} placeholder="props.placeholder" className="inputText" >
      {
        props.children
      }
    </input>
  )
}

export default InputText
