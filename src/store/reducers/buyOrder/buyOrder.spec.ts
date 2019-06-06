import { buyOrderReducer } from './buyOrder'
import { IBuyOrder, IBuyOrders } from '../../../modules/BuyOrder/types';

describe('buyOrder Reducer', () => {
  test('returns state object', () => {
    const result = buyOrderReducer(undefined, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  const existingBuyOrder: IBuyOrder = {
    id: 1,
    name: 'cat',
    maxBidPrice: 200,
    dataPackageType: 'ID Mapping'
  }

  const buyOrder: IBuyOrder = {
    id: 2,
    name: 'dog',
    maxBidPrice: 250,
    dataPackageType: 'ID Mapping'
  }

  test('gets a buyOrder', () => {
    const state = {
      buyOrders: []
    }
    const expectedState: IBuyOrders = {
      buyOrders: [buyOrder]
    }
    const action = { type: 'BUYORDER_GET', payload: { buyOrders: [buyOrder] }}
    const result = buyOrderReducer(state, action)
    expect(result).toEqual(expectedState)
  })

  test('adds a buyOrder', () => {
    const state = {
      buyOrders: [existingBuyOrder]
    }
    const expectedState: IBuyOrders = {
      buyOrders: [existingBuyOrder, buyOrder]
    }
    const action = { type: 'BUYORDER_ADD', payload: { buyOrders: [buyOrder] }}
    const result = buyOrderReducer(state, action)
    expect(result).toEqual(expectedState)
  })

  test('deletes a buyOrder', () => {
    const state = {
      buyOrders: [existingBuyOrder, buyOrder]
    }
    const expectedState: IBuyOrders = {
      buyOrders: [existingBuyOrder]
    }
    const action = { type: 'BUYORDER_DELETE', payload: { buyOrders: [existingBuyOrder] }}
    const result = buyOrderReducer(state, action)
    expect(result).toEqual(expectedState)
  })

  test('updates a buyOrder', () => {
    const state = {
      buyOrders: [existingBuyOrder, buyOrder]
    }
    const expectedState: IBuyOrders = {
      buyOrders: [existingBuyOrder]
    }
    const action = { type: 'BUYORDER_UPDATE', payload: { buyOrders: [existingBuyOrder] }}
    const result = buyOrderReducer(state, action)
    expect(result).toEqual(expectedState)
  })
})
