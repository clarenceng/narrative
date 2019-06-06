import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BuyOrderForm as BuyOrderFormComponent} from '../components'
import * as actions from '../../../store/actions'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AppState } from '../../../store';
import { IDataPackageTypeOptions, DataPackageType, IBuyOrder } from '../../../types/BuyOrder';

type AppProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const dataPackageTypes: DataPackageType[] = ['Device Location', 'Device Behavior', 'ID Mapping']
const dataPackageTypeOptions: IDataPackageTypeOptions[] = dataPackageTypes.map((type: DataPackageType) => ({
  value: type,
  label: type
}))

const initalFormData: IBuyOrder = {
  id: 0,
  name: '',
  maxBidPrice: 0,
  dataPackageType: dataPackageTypeOptions[0].value
}

const Container = ({
  buyOrders,
  onAddBuyOrders,
  buyOrderToUpdate,
  onUpdateBuyOrders
}: AppProps) => {
  const [formData, setFormData] = useState(initalFormData)

  useEffect(() => {
    let newId: number = buyOrders.length ? buyOrders[buyOrders.length - 1].id : 0
    setFormData({
      ...formData,
      id: newId + 1
    })
  }, [buyOrders])

  useEffect(() => {
    if (buyOrderToUpdate) {
      setFormData(buyOrderToUpdate)
    }
  }, [buyOrderToUpdate])

  const handleOnSubmit = () => onAddBuyOrders(formData, () => setFormData(initalFormData))

  const handleOnUpdate = () => onUpdateBuyOrders(formData, () => setFormData(initalFormData))

  const handleOnCancel = () => setFormData(initalFormData)

  const handleInputChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })

  return (
    <BuyOrderFormComponent
      formData={ formData }
      dataPackageTypeOptions={ dataPackageTypeOptions }
      handleOnSubmit={ handleOnSubmit }
      handleOnUpdate={ handleOnUpdate }
      handleOnCancel={ handleOnCancel }
      handleInputChange={ handleInputChange }
    />
  )
}

const mapStateToProps = (state: AppState) => ({
  buyOrders: state.buyOrders.data,
  isLoading: state.buyOrders.buyOrdersLoading,
  buyOrderToUpdate: state.buyOrders.buyOrderToUpdate
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction> ) => ({
  onAddBuyOrders: (formData: IBuyOrder, cb: () => void) => dispatch( actions.buyOrderAdd(formData, cb) ),
  onUpdateBuyOrders: (formData: IBuyOrder, cb: () => void) => dispatch( actions.buyOrderUpdateSubmit(formData, cb) )
})

export const BuyOrderForm =  connect(mapStateToProps, mapDispatchToProps)(Container)