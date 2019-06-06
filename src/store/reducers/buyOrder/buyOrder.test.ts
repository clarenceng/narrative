import { buyOrderReducer } from './buyOrder'
import * as actionTypes from '../../actions/buyOrder/buyOrderActionTypes'
import { IBuyOrder, IBuyOrdersState } from '../../../types/BuyOrder';

describe('buyOrder Reducer', () => {
  const initialState: IBuyOrdersState = {
    buyOrdersLoading: false,
    buyOrderToUpdate: undefined,
    data: []
  }
  
  const existingBuyOrder: IBuyOrder = {
    id: 1,
    name: 'cat',
    maxBidPrice: 200,
    dataPackageType: 'ID Mapping'
  }

  const newBuyOrder: IBuyOrder = {
    id: 2,
    name: 'dog',
    maxBidPrice: 250,
    dataPackageType: 'ID Mapping'
  }

  test('gets buyOrders', () => {
    const expectedState: IBuyOrdersState = {
      ...initialState,
      data: [existingBuyOrder, newBuyOrder]
    }
    const action = { type: actionTypes.BUYORDER_GET_SUCCESS, buyOrders: [existingBuyOrder, newBuyOrder] }
    const result = buyOrderReducer(initialState, action)
    expect(result).toEqual(expectedState)
  })

  test('adds a buyOrder', () => {
    const state: IBuyOrdersState = {
      ...initialState,
      data: [existingBuyOrder]
    }
    const expectedState: IBuyOrdersState = {
      ...initialState,
      data: [existingBuyOrder, newBuyOrder]
    }
    const action = { type: actionTypes.BUYORDER_ADD_SUCCESS, buyOrders: [newBuyOrder] }
    const result = buyOrderReducer(state, action)
    expect(result).toEqual(expectedState)
  })

  test('deletes a buyOrder', () => {
    const state: IBuyOrdersState = {
      ...initialState,
      data: [existingBuyOrder, newBuyOrder]
    }
    const expectedState: IBuyOrdersState = {
      ...initialState,
      data: [existingBuyOrder]
    }
    const action = { type: actionTypes.BUYORDER_DELETE_SUCCESS, id: newBuyOrder.id }
    const result = buyOrderReducer(state, action)
    expect(result).toEqual(expectedState)
  })

  test('sends data to update to form', () => {
    const state: IBuyOrdersState = {
      ...initialState,
      data: [existingBuyOrder]
    }
    const expectedState: IBuyOrdersState = {
      ...initialState,
      buyOrderToUpdate: existingBuyOrder,
      data: [existingBuyOrder]
    }
    const action = { type: actionTypes.BUYORDER_UPDATE, id: existingBuyOrder.id }
    const result = buyOrderReducer(state, action)
    expect(result).toEqual(expectedState)
  })

  test('updates a buyOrder', () => {
    const state: IBuyOrdersState = {
      ...initialState,
      data: [existingBuyOrder, newBuyOrder]
    }
    const modifiedBuyOrder: IBuyOrder = {
      ...newBuyOrder,
      name: 'cats'
    }
    const expectedState: IBuyOrdersState = {
      ...initialState,
      data: [existingBuyOrder, modifiedBuyOrder]
    }
    const action = { type: actionTypes.BUYORDER_UPDATE_SUBMIT_SUCCESS, buyOrders: [modifiedBuyOrder] }
    const result = buyOrderReducer(state, action)
    expect(result).toEqual(expectedState)
  })
})
