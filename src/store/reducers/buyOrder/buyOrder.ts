import { IBuyOrder } from '../../../modules/BuyOrder/types'
import * as actionTypes from '../../actions/buyOrder/buyOrderActionTypes'

export interface IBuyOrdersState {
  buyOrdersLoading: boolean
  data: IBuyOrder[]
}

const initialState: IBuyOrdersState = {
  buyOrdersLoading: false,
  data: []
}

export const buyOrderReducer = (state: IBuyOrdersState = initialState, action: any) => {
  switch(action.type) {
    case actionTypes.BUYORDER_GET: {
      return {
        ...state,
        buyOrdersLoading: true
      }
    }
    case actionTypes.BUYORDER_GET_SUCCESS: {
      return {
        ...state,
        buyOrdersLoading: false,
        data: [
          ...state.data,
          ...action.buyOrders
        ]
      }
    }
    case actionTypes.BUYORDER_GET_FAIL: {
      return {
        ...state,
        buyOrdersLoading: false,
      }
    }
    default: return state
  }
}
