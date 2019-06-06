import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BuyOrderListing } from '../components'
import * as actions from '../../../store/actions'
import { IBuyOrdersState } from '../../../store/reducers/buyOrder';

const Container = (props: any) => {
  useEffect(() => {
    props.onFetchBuyOrders()
  }, [])
  return (
    <BuyOrderListing
      buyOrders={ props.buyOrders }
      isLoading={ props.isLoading }
    />
  )
}

const mapStateToProps = (state: {buyOrders: IBuyOrdersState}) => ({
  buyOrders: state.buyOrders.data,
  isLoading: state.buyOrders.buyOrdersLoading
})

const mapDispatchToProps = (dispatch: any) => ({
  onFetchBuyOrders: () => dispatch( actions.buyOrderGet() )
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)