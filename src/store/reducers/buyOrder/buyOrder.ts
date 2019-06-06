import * as actionTypes from '../../actions/buyOrder/buyOrderActionTypes'
import { IBuyOrdersState, IBuyOrderActionTypes } from '../../../types/BuyOrder';

const initialState: IBuyOrdersState = {
  buyOrdersLoading: false,
  data: []
}

export const buyOrderReducer = (state: IBuyOrdersState = initialState, action: IBuyOrderActionTypes) => {
  switch(action.type) {
    case actionTypes.BUYORDER_GET: 
    case actionTypes.BUYORDER_ADD: {
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
    case actionTypes.BUYORDER_GET_FAIL:
    case actionTypes.BUYORDER_ADD_FAIL: {
      return {
        ...state,
        buyOrdersLoading: false,
      }
    }
    default: return state
  }
}
