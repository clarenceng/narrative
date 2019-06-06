export type DataPackageType = 'Device Location' | 'Device Behavior' | 'ID Mapping'

export type BuyOrderActions = 
  | 'BUYORDER_GET'
  | 'BUYORDER_GET_SUCCESS'
  | 'BUYORDER_GET_FAIL'
  | 'BUYORDER_ADD'
  | 'BUYORDER_ADD_SUCCESS'
  | 'BUYORDER_ADD_FAIL'
  | 'BUYORDER_DELETE'
  | 'BUYORDER_DELETE_SUCCESS'
  | 'BUYORDER_DELETE_FAIL'
  | 'BUYORDER_UPDATE'
  | 'BUYORDER_UPDATE_SUBMIT'
  | 'BUYORDER_UPDATE_SUBMIT_SUCCESS'
  | 'BUYORDER_UPDATE_SUBMIT_FAIL'

export interface IBuyOrder {
  id: number
  name: string
  maxBidPrice: number
  dataPackageType: DataPackageType
}

export interface IBuyOrders {
  buyOrders: IBuyOrder[]
}

export interface IDataPackageTypeOptions {
  value: DataPackageType,
  label: DataPackageType
}

export interface IBuyOrdersState {
  buyOrdersLoading: boolean
  data: IBuyOrder[]
  buyOrderToUpdate?: IBuyOrder
}

export interface IBuyOrderActionTypes extends IBuyOrders {
  type: BuyOrderActions
  error?: string
  id?: number
}