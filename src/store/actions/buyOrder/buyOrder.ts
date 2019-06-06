import * as actionTypes from './buyOrderActionTypes';
import { IBuyOrder } from '../../../types/BuyOrder';
import { Dispatch } from 'redux';

const buyOrderGetStart = () => ({
  type: actionTypes.BUYORDER_GET
})

const buyOrderGetSuccess = (buyOrders: IBuyOrder[]) => ({
  type: actionTypes.BUYORDER_GET_SUCCESS,
  buyOrders: buyOrders
})

const buyOrderGetFail = (error: string) => ({
  type: actionTypes.BUYORDER_GET_FAIL,
  error: error
})

export const buyOrderGet = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(buyOrderGetStart());
    fetch('https://narrative-a73da.firebaseio.com/buyOrders.json')
      .then(res => res.json())
      .then(buyOrders => {
        dispatch(buyOrderGetSuccess(buyOrders))
      })
      .catch( err => {
        dispatch(buyOrderGetFail(err))
      })
  }
}

const buyOrderAddStart = () => ({
  type: actionTypes.BUYORDER_ADD
})

const buyOrderAddSuccess = (buyOrder: IBuyOrder) => ({
  type: actionTypes.BUYORDER_ADD_SUCCESS,
  buyOrders: [buyOrder]
})

const buyOrderAddFail = (error: string) => ({
  type: actionTypes.BUYORDER_ADD_FAIL,
  error: error
})

export const buyOrderAdd = (formData: IBuyOrder) => {
  const firebaseKey = formData.id - 1
  return (dispatch: Dispatch<any>) => {
    dispatch(buyOrderAddStart());
    fetch(`https://narrative-a73da.firebaseio.com/buyOrders/${firebaseKey}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(buyOrder => {
        dispatch(buyOrderAddSuccess(buyOrder))
      })
      .catch( err => {
        dispatch(buyOrderAddFail(err))
      })
  }
}