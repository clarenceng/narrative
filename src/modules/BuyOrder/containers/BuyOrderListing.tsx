import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BuyOrderListing as BuyOrderListingComponent } from '../components'
import * as actions from '../../../store/actions'
import { Icon } from '../../../components';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AppState } from '../../../store';

type AppProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const Container = (props: AppProps) => {
  useEffect(() => {
    props.onFetchBuyOrders()
  }, [])

  const handleOnEdit = (id: number) => {
    console.log('edit', id)
  }

  const handleOnDelete = (id: number) => {
    console.log('delete', id)
  }

  return props.isLoading
    ? <Icon type='Load' size='md' color='info' rotate />
    : <BuyOrderListingComponent
        buyOrders={ props.buyOrders }
        handleOnEdit={ handleOnEdit }
        handleOnDelete={ handleOnDelete }
      />
}

const mapStateToProps = (state: AppState) => ({
  buyOrders: state.buyOrders.data,
  isLoading: state.buyOrders.buyOrdersLoading
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction> ) => ({
  onFetchBuyOrders: () => dispatch( actions.buyOrderGet() )
})

export const BuyOrderListing =  connect(mapStateToProps, mapDispatchToProps)(Container)