import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

const TabViewComponent = props => {
  return (
    <TabView
      activeIndex={props.activeTab}
      onTabChange={e => props.setActiveTab(e.index)}
    >
      {props.tabs.map(tab => (
        <TabPanel header={tab.header}>{tab.content}</TabPanel>
      ))}
    </TabView>
  )
}

export default TabViewComponent
