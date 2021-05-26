import React, { useState } from 'react'
import DropDownComponent from '../../components/dropDown/dropDown'
import Table from '../../components/table/table'
import Button from '../../components/buttonComponent/button'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../utils/propsMapper'
import at from 'v-at'

const Settings = props => {
  const tableColumns = [
    'OPERATING CONSTRAINT',
    'MINIMUM',
    'MAXIMUM',
    'CURRENT',
    'STEP BOUND'
  ]

  const [tableContent, setTableContent] = useState([
    {
      value: 'T1',
      key: 'C',
      MINIMUM: 480,
      MAXIMUM: 549,
      CURRENT: 549.5,
      'STEP BOUND': 0.5
    },
    {
      value: 'T2',
      key: 'C',
      MINIMUM: 480,
      MAXIMUM: 549,
      CURRENT: 549.5,
      'STEP BOUND': 0.5
    },
    {
      value: 'T3',
      key: 'C',
      MINIMUM: 480,
      MAXIMUM: 549,
      CURRENT: 549.5,
      'STEP BOUND': 0.5
    }
  ])

  const view = []
  if (at(props, 'unitReducer.selectedConfig')) {
    view.push(
      <Table
        columns={tableColumns}
        tableContent={tableContent}
        setTableContent={setTableContent}
      />
    )
  } else {
    view.push(
      <div className='col-md-6'>
        <div className='box-view'>
          <h6>Please select a configuration</h6>
          <div>
            <DropDownComponent
              value={null}
              options={at(props, 'unitReducer.configs')}
              onChange={e => props.setConfiguration(e.value)}
              placeholder='Select a Configuration'
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      {view}
      <div>
        {/* <Button onClick={() => props.setActiveTab(1)}>NEXT</Button> */}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
