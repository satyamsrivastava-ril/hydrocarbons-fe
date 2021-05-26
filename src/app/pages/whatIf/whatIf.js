import React, { useState } from 'react'
import { BiDownArrow, BiPin, BiUpArrow } from 'react-icons/bi'
import LabelWithSlider from '../../components/labelWithSlider/labelWithSlider'

const flow1Data = [
  {
    label: 'SRN NPW',
    value: 'SRN NPW',
    unit: 'M3/hr',
    unitValue: '780',
    originalValue: '780'
  },
  {
    label: 'External FRN',
    value: 'External FRN',
    unit: '%',
    unitValue: '780',
    originalValue: '780'
  },
  {
    label: 'Coker nap NPW',
    value: 'Coker nap NPW',
    unit: 'M3/hr',
    unitValue: '780',
    originalValue: '780'
  }
]

const flow2Data = [
  {
    label: 'SRN NPW',
    value: 'SRN NPW',
    unit: '%',
    unitValue: '780',
    originalValue: '780'
  },
  {
    label: 'External FRN',
    value: 'External FRN',
    unit: '%',
    unitValue: '780',
    originalValue: '780'
  },
  {
    label: 'Coker nap NPW',
    value: 'Coker nap NPW',
    unit: '%',
    unitValue: '780',
    originalValue: '780'
  }
]

const WhatIf = () => {
  const [openState, setOpenState] = useState({})
  const [data, setData] = useState({
    flow1: flow1Data,
    flow2: flow2Data
  })
  const BoxWithUpDown = props => {
    return (
      <div>
        <span>
          <input placeholder={props.text} value={props.value} />
        </span>
        <div>
          <BiDownArrow />
          <BiUpArrow />
        </div>
      </div>
    )
  }

  const onClickHandler = item => {
    setOpenState({ ...openState, [item]: !openState[item] })
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12 p-0'>
          <div className='box-view row p-0'>
            <div className='col-lg-9 col-md-12 p-0'>
              <div className='flow-box blue-box'>
                <div className=''>
                  <h5 className='sub-title'>FLOW I</h5>
                  <div className='row'>
                    {flow1Data.map(item => (
                      <div className='col-md-4 three-one'>
                        <LabelWithSlider
                          onClick={() => onClickHandler(item.value)}
                          item={item}
                        >
                          {openState[item.value] && (
                            <div className='d-flex'>
                              <BiPin />
                              <BoxWithUpDown text={'Min value'} />
                              <BoxWithUpDown text={'Max value'} />
                            </div>
                          )}
                        </LabelWithSlider>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=''>
                  <h5 className='sub-title'>FLOW II</h5>
                  <div className='row'>
                    {flow2Data.map(item => (
                      <div className='col-md-4 three-one'>
                        <LabelWithSlider item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flow-box orange-box'>
                <div>
                  <h5 className='sub-title'>TEMPERATURE</h5>
                  <div className='row'>
                    {flow1Data.map(item => (
                      <div className='col-md-4 three-one'>
                        <LabelWithSlider item={item} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className='green-box'>
                  <h5 className='sub-title'>PRESSURE</h5>
                  <div className='row'>
                    {flow1Data.map(item => (
                      <div className='col-md-4 three-one'>
                        <LabelWithSlider item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-3 p-0 border-left'>
              <div className='output-box flow-box h-100'>
                <h5 className='sub-title'>OUTPUT</h5>
                <div className='row'>
                  {flow1Data.map(item => (
                    <div className='col-md-12 three-one'>
                      <LabelWithSlider item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatIf
