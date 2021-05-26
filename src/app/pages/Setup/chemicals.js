import React from 'react'
import { connect } from 'react-redux'
import at from 'v-at'
import Button from '../../components/buttonComponent/button'
import LabelWithSlider from '../../components/labelWithSlider/labelWithSlider'
import { mapDispatchToProps, mapStateToProps } from '../../utils/propsMapper'

const Chemicals = props => {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <div class='box-view'>
          <h6>FEED</h6>
          <div className='row'>
            {(at(props, 'unitReducer.selectedFeeds') || []).map(item => (
              <LabelWithSlider item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div class='box-view'>
          <h6>PRODUCTS</h6>
          <div className='row'>
            {(at(props, 'unitReducer.selectedProducts') || []).map(item => (
              <LabelWithSlider item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className='col-md-6'>
        <div class='box-view'>
          <div className="row">
            <LabelWithSlider item={{ value: 'Output value', price: 780 }} />
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <Button className='btn btn-fill'>CALCULATE</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div class='box-view'>
          <h6>PROFIT</h6>
          <div>
            <span>5000/ton</span>
            <span>5,00,000 net profit</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Chemicals)
