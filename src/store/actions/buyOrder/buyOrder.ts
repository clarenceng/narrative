import * as actionTypes from './buyOrderActionTypes';
import { IBuyOrder } from '../../../types/BuyOrder';
import { Dispatch } from 'redux';

// Buy Order Fetch action

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

// Buy Order Add action

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

export const buyOrderAdd = (formData: IBuyOrder, cb: () => void) => {
  console.log('add', formData)
  const firebaseKey = formData.id - 1
  return (dispatch: Dispatch<any>) => {
    dispatch(buyOrderAddStart());
    fetch(`https://narrative-a73da.firebaseio.com/buyOrders/${firebaseKey}.json`, {
      method: 'PUT',
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(buyOrder => {
        dispatch(buyOrderAddSuccess(buyOrder))
        cb()
      })
      .catch( err => {
        dispatch(buyOrderAddFail(err))
      })
  }
}

// Buy Order Delete action

const buyOrderDeleteStart = () => ({
  type: actionTypes.BUYORDER_DELETE
})

const buyOrderDeleteSuccess = (id: number) => ({
  type: actionTypes.BUYORDER_DELETE_SUCCESS,
  id: id
})

const buyOrderDeleteFail = (error: string) => ({
  type: actionTypes.BUYORDER_DELETE_FAIL,
  error: error
})

export const buyOrderDelete = (id: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(buyOrderDeleteStart());
    fetch(`https://narrative-a73da.firebaseio.com/buyOrders/${id - 1}.json`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        dispatch(buyOrderDeleteSuccess(id))
      })
      .catch( err => {
        dispatch(buyOrderDeleteFail(err))
      })
  }
}

// Buy Order Update action

const buyOrderUpdateStart = (id: number) => ({
  type: actionTypes.BUYORDER_UPDATE,
  id
})

export const buyOrderUpdate = (id: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(buyOrderUpdateStart(id));
  }
}

const buyOrderUpdateSubmitStart = () => ({
  type: actionTypes.BUYORDER_UPDATE_SUBMIT
})

const buyOrderUpdateSubmitSuccess = (buyOrder: IBuyOrder) => ({
  type: actionTypes.BUYORDER_UPDATE_SUBMIT_SUCCESS,
  buyOrders: [buyOrder]
})

const buyOrderUpdateSubmitFail = (error: string) => ({
  type: actionTypes.BUYORDER_UPDATE_SUBMIT_FAIL,
  error: error
})
export const buyOrderUpdateSubmit = (formData: IBuyOrder, cb: () => void) => {
  const firebaseKey = formData.id - 1
  return (dispatch: Dispatch<any>) => {
    dispatch(buyOrderUpdateSubmitStart());
    fetch(`https://narrative-a73da.firebaseio.com/buyOrders/${firebaseKey}.json`, {
      method: 'PUT',
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(buyOrder => {
        dispatch(buyOrderUpdateSubmitSuccess(buyOrder))
        cb()
      })
      .catch( err => {
        dispatch(buyOrderUpdateSubmitFail(err))
      })
  }
}