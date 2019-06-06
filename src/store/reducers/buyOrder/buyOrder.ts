import * as actionTypes from '../../actions/buyOrder/buyOrderActionTypes'
import { IBuyOrdersState, IBuyOrderActionTypes } from '../../../types/BuyOrder';

const initialState: IBuyOrdersState = {
  buyOrdersLoading: false,
  data: []
}

export const buyOrderReducer = (state: IBuyOrdersState = initialState, action: IBuyOrderActionTypes) => {
  switch(action.type) {
    case actionTypes.BUYORDER_GET: 
    case actionTypes.BUYORDER_ADD:
    case actionTypes.BUYORDER_DELETE: {
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
    case actionTypes.BUYORDER_GET_FAIL:
    case actionTypes.BUYORDER_ADD_FAIL:
    case actionTypes.BUYORDER_DELETE_FAIL: {
      return {
        ...state,
        buyOrdersLoading: false,
      }
    }
    default: return state
  }
}
