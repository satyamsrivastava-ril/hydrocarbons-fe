import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/buttonComponent/button'
import DialogModal from '../../components/dialogModal/dialogModal'
import DropDownComponent from '../../components/dropDown/dropDown'
import Label from '../../components/label/label'
import TabViewComponent from '../../components/tabView/tabView'
import { mapDispatchToProps, mapStateToProps } from '../../utils/propsMapper'
import Chemicals from './chemicals'
import Config from './config'
import Settings from './settings'
import at from 'v-at'
const subMenuoptions = [
  {
    header: 'CONFIG',
    content: ''
  },
  {
    header: 'CHEMICALS',
    content: ''
  },
  {
    header: 'SETTINGS',
    content: ''
  }
]

const Setup = props => {
  const [activeSubMenu, setActiveSubMenu] = useState(0)
  const [displayModal, setDisplayModal] = useState(false)

  const handleConfirmClick = () => {
    setDisplayModal(false)
    props.setUnit(null)
    props.setConfiguration(null)
  }

  useEffect(() => {
    if (!at(props, `unitReducer.units`)) {
      props.getUnits()
      props.getConfigurations()
    }
  }, [])

  const getContent = () => {
    switch (activeSubMenu) {
      case 0: {
        return <Config setActiveTab={setActiveSubMenu} />
      }
      case 1: {
        return <Chemicals />
      }
      case 2: {
        return <Settings />
      }
    }
  }
  return (
    <div>
      <div className='d-flex justify-content-between top-filter-bar align-items-center'>
        <TabViewComponent
          activeTab={activeSubMenu}
          setActiveTab={setActiveSubMenu}
          tabs={subMenuoptions}
        />
        <DialogModal className='confirm-modal' displayModal={displayModal}>
          <div>
            <p className='text-center'>
              Are you sure you want to deselect this factory unit? All data nd
              changes will be list if u proceed;
            </p>
            <div className='text-center'>
              <Button
                className='btn btn-unfill mx-4'
                onClick={handleConfirmClick}
              >
                Confirm
              </Button>
              <Button
                className='btn btn-fill mx-4'
                onClick={() => setDisplayModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogModal>
        {at(props, `unitReducer.selectedUnit`) ? (
          <div className='d-flex filter-details'>
            <Label
              item={at(props, `unitReducer.selectedUnit`)}
              handleRemove={() => setDisplayModal(true)}
            />
            <DropDownComponent
              value={at(props, 'unitReducer.selectedConfig')}
              options={at(props, 'unitReducer.configs') || []}
              onChange={e => props.setConfiguration(e.value)}
              placeholder='Select a Config'
            />
          </div>
        ) : null}
      </div>
      <div>{getContent()}</div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup)
