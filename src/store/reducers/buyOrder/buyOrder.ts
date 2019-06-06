import * as actionTypes from '../../actions/buyOrder/buyOrderActionTypes'
import { IBuyOrdersState, IBuyOrderActionTypes } from '../../../types/BuyOrder';

const initialState: IBuyOrdersState = {
  buyOrdersLoading: false,
  data: [],
  buyOrderToUpdate: undefined
}

export const buyOrderReducer = (state: IBuyOrdersState = initialState, action: IBuyOrderActionTypes) => {
  switch(action.type) {
    case actionTypes.BUYORDER_GET: 
    case actionTypes.BUYORDER_ADD:
    case actionTypes.BUYORDER_DELETE:
    case actionTypes.BUYORDER_UPDATE_SUBMIT: {
      return {
        ...state,
        buyOrdersLoading: true
      }
    }
    case actionTypes.BUYORDER_GET_SUCCESS:
    case actionTypes.BUYORDER_ADD_SUCCESS: {
      return {
        ...state,
        buyOrdersLoading: false,
        data: [
          ...state.data,
          ...action.buyOrders
        ]
      }
    }
    case actionTypes.BUYORDER_DELETE_SUCCESS: {
      const newData = state.data.filter((data) => data.id !== action.id)
      return {
        ...state,
        buyOrdersLoading: false,
        data: newData
      }
    }
    case actionTypes.BUYORDER_UPDATE: {
      const dataToUpdate = state.data.filter((data) => data.id === action.id)[0]
      return {
        ...state,
        buyOrderToUpdate: dataToUpdate
      }
    }
    case actionTypes.BUYORDER_UPDATE_SUBMIT_SUCCESS: {
      const updatedData = state.data.map((data) =>
        data.id === action.buyOrders[0].id 
          ? action.buyOrders[0]
          : data
      )
      return {
        ...state,
        buyOrdersLoading: false,
        data: updatedData,
        buyOrderToUpdate: undefined
      }
    }
    case actionTypes.BUYORDER_GET_FAIL:
    case actionTypes.BUYORDER_ADD_FAIL:
    case actionTypes.BUYORDER_DELETE_FAIL:
    case actionTypes.BUYORDER_UPDATE_SUBMIT_FAIL: {
      return {
        ...state,
        buyOrdersLoading: false,
      }
    }
    default: return state
  }
}
