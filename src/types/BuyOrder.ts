export type DataPackageType = 'Device Location' | 'Device Behavior' | 'ID Mapping'

export type BuyOrderActions = 
  | 'BUYORDER_GET'
  | 'BUYORDER_GET_SUCCESS'
  | 'BUYORDER_GET_FAIL'
  | 'BUYORDER_ADD'
  | 'BUYORDER_ADD_SUCCESS'
  | 'BUYORDER_ADD_FAIL'

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
}

export interface IBuyOrderActionTypes extends IBuyOrders {
  type: BuyOrderActions
  error?: string
}