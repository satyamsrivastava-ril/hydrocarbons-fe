import React, { useState } from 'react'
import Button from '../buttonComponent/button'
import SliderComp from '../slider/slider'

const LabelWithSlider = ({
  item,
  upperLeftText,
  upperRightText,
  lowerRightValue,
  onClick,
  children
}) => {
  const [localItem, setLocalItem] = useState(item)
  console.log('check', localItem)
  return (
    <div onClick={onClick} className='col-md-6'>
      <div className='inside-box d-flex flex-wrap justify-content-between w-100'>
        <div className='left-content d-flex flex-column w-50'>
          <h6 className='text-uppercase'>
            {' '}
            {upperLeftText || localItem.value}
          </h6>
          <div className='d-flex align-items-center'>
            <Button
              className='btn btn-circle'
              onClick={e => {
                setLocalItem({
                  ...localItem,
                  unitValue: parseInt(localItem.unitValue) - 1
                })
                e.stopPropagation()
              }}
            >
              -
            </Button>
            <SliderComp
              value={localItem.unitValue}
              setValue={value =>
                setLocalItem({ ...localItem, unitValue: value })
              }
            />
            <Button
              className='btn btn-circle'
              onClick={e => {
                setLocalItem({
                  ...localItem,
                  unitValue: parseInt(localItem.unitValue) + 1
                })
                e.stopPropagation()
              }}
            >
              +
            </Button>
          </div>
        </div>
        <div className='right-content d-flex w-50 flex-column pl-4'>
          <h5>{item.unit || upperRightText}</h5>
          <span>{lowerRightValue || localItem.unitValue}</span>
          {children}
        </div>
      </div>
    </div>
  )
}

export default LabelWithSlider
