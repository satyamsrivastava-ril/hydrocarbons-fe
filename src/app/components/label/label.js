import React from 'react'

const Label = props => {
  return (
    <h4 className="p-dropdown p-component p-inputwrapper mr-4 justify-content-between align-items-center px-3">
      <span className="p-placeholder">{props.item.value}</span>
      <span className="close-icon" onClick={() => props.handleRemove(props.type, props.item.value)}>
        x
      </span>
    </h4>
  )
}

export default Label
