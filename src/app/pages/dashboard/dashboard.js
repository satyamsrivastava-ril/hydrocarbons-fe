import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/buttonComponent/button'
import ScoreCard from '../../components/scoreCard/scoreCard'
import Upload from '../../components/upload/upload'
import { mapDispatchToProps, mapStateToProps } from '../../utils/propsMapper'
import './dashboard.scss'
import { useHistory } from 'react-router-dom'
import Header from '../header/Header'
import ItemCardComponent from '../../components/itemCard/ItemCard'
import TabViewComponent from '../../components/tabView/tabView'
import Setup from '../Setup/setup'
import WhatIf from '../whatIf/whatIf'

const tabViewOptions = [
  {
    header: 'Setup',
    content: ''
  },
  {
    header: 'What if',
    content: ''
  }
]

function Dashboard (props) {
  const history = useHistory()
  const [activeTab, setActiveTab] = useState(0)

  const getContent = () => {
    switch (activeTab) {
      case 0: {
        return <Setup />
      }
      case 1: {
        return <WhatIf />
      }
    }
  }
  return (
    <div>
      <Header history={history} />
      <div className='dashboard'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 tabs-hydro px-5'>
              <TabViewComponent
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabs={tabViewOptions}
              />
              <div>{getContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
