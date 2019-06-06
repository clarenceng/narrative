export type DataPackageType = 'Device Location' | 'Device Behavior' | 'ID Mapping'

export interface IBuyOrder {
  id: number
  name: string
  maxBidPrice: number
  dataPackageType: DataPackageType
}

export interface IBuyOrders {
  buyOrders: IBuyOrder[]
}