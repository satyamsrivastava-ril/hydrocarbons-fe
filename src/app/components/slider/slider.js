import React, { useState } from 'react'
import Slider, { SliderTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'
import './slider.scss'
const SliderComp = props => {
  return (
    <Slider
      min={0}
      max={1000}
      value={props.value}
      onClick={e => e.stopPropagation()}
      onChange={value => {
        props.setValue(value)
      }}
    />
  )
}

export default SliderComp
