import * as actionTypes from './buyOrderActionTypes';

const buyOrderGetStart = () => ({
  type: actionTypes.BUYORDER_GET
})

const buyOrderGetSuccess = (buyOrders: any) => ({
  type: actionTypes.BUYORDER_GET_SUCCESS,
  buyOrders: buyOrders
})

const buyOrderGetFail = (error: any) => ({
  type: actionTypes.BUYORDER_GET_FAIL,
  error: error
})

export const buyOrderGet = () => {
  return (dispatch: any) => {
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