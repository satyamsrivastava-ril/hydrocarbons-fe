import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import at from 'v-at'
import Button from '../../components/buttonComponent/button'
import DropDownComponent from '../../components/dropDown/dropDown'
import Label from '../../components/label/label'
import { mapDispatchToProps, mapStateToProps } from '../../utils/propsMapper'

const Config = props => {
  // const [unit, setUnit] = useState(null)
  const leftView = []
  const rightView = []

  useEffect(() => {
    if (at(props, `unitReducer.selectedUnit`)) {
      props.getFeedsAndProducts(at(props, `unitReducer.selectedUnit.value`))
    }
  }, [at(props, `unitReducer.selectedUnit`)])

  console.log('check unitReducer', props.unitReducer)
  const handleRemove = (type, itemToRemove) => {
    if (type === 'feed') {
      props.setFeedsAndProducts({
        feeds: (at(props, `unitReducer.selectedFeeds`) || []).filter(
          item => item.value !== itemToRemove
        )
      })
      // setFeed(prevState =>
      //   prevState.filter(item => item.value !== itemToRemove)
      // )
    } else if (type === 'products') {
      props.setFeedsAndProducts({
        products: (at(props, `unitReducer.selectedProducts`) || []).filter(
          item => item.value !== itemToRemove
        )
      })

      // setProducts(prevState =>
      //   prevState.filter(item => item.value !== itemToRemove)
      // )
    }
  }
  // <div className="row">
  if (at(props, `unitReducer.selectedUnit`)) {
    leftView.push(
      <div className='col-md-6'>
        <div className='box-view'>
          <h6 className='text-uppercase'>Feed</h6>
          <div>
            <div>
              {(at(props, `unitReducer.selectedFeeds`) || []).map(item => (
                <Label item={item} type='feed' handleRemove={handleRemove} />
              ))}
            </div>
            <div>
              <DropDownComponent
                value={null}
                options={at(props, `unitReducer.feeds`) || []}
                onChange={
                  e =>
                    props.setFeedsAndProducts({
                      feeds: [
                        ...(at(props, `unitReducer.selectedFeeds`) || []),
                        (at(props, 'unitReducer.feeds') || []).find(
                          obj => obj.value === e.target.value
                        )
                      ]
                    })
                  // setFeed([
                  //   ...feed,
                  //   feedChemicals.find(obj => obj.value === e.target.value)
                  // ])
                }
                placeholder='Select a Chemical'
              />
            </div>
          </div>
        </div>
      </div>
    )
    rightView.push(
      <div className='col-md-6'>
        <div className='box-view'>
          <h6 className='text-uppercase'>Products</h6>
          <div>
            <div>
              {(at(props, `unitReducer.selectedProducts`) || []).map(item => (
                <Label
                  item={item}
                  type='products'
                  handleRemove={handleRemove}
                />
              ))}
            </div>
            <div>
              <DropDownComponent
                value={null}
                options={at(props, `unitReducer.products`)}
                onChange={
                  e =>
                    props.setFeedsAndProducts({
                      products: [
                        ...(at(props, `unitReducer.selectedProducts`) || []),
                        (at(props, 'unitReducer.products') || []).find(
                          obj => obj.value === e.target.value
                        )
                      ]
                    })

                  // setProducts([
                  //   ...products,
                  //   productChemicals.find(obj => obj.value === e.target.value)
                  // ])
                }
                placeholder='Select a Chemical'
              />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    leftView.push(
      <div className='col-md-6'>
        <div className='box-view'>
          <h6>Please select a unit</h6>
          <div>
            <DropDownComponent
              value={at(props, `unitReducer.selectedUnit`)}
              options={at(props, `unitReducer.units`) || []}
              onChange={e => props.setUnit(e)}
              placeholder='Select a Unit'
            />
          </div>
        </div>
      </div>
    )
  }
  // </div>
  return (
    <div>
      <div className='row'>
        {leftView}
        {rightView}
      </div>
      <div className='text-center my-5 pt-4'>
        {at(props, `unitReducer.selectedUnit`) &&
          (at(props, `unitReducer.selectedFeeds`) || []).length > 0 &&
          (at(props, `unitReducer.selectedProducts`) || []).length > 0 && (
            <Button
              onClick={() => props.setActiveTab(1)}
              className='btn btn-fill'
            >
              NEXT
            </Button>
          )}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)
