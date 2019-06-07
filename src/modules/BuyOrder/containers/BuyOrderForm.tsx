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

export const initalFormData: IBuyOrder = {
  id: 1,
  name: '',
  maxBidPrice: 0,
  dataPackageType: dataPackageTypeOptions[0].value
}

const Container = ({
  buyOrders,
  onAddBuyOrders,
  buyOrderToUpdate,
  onUpdateBuyOrders,
  isUpdating
}: AppProps) => {
  const [formData, setFormData] = useState(initalFormData)

  const cleanFormData = () => {
    let newId: number = buyOrders.length ? buyOrders[buyOrders.length - 1].id : 0
    setFormData({
      ...initalFormData,
      id: newId + 1
    })
  }

  useEffect(() => cleanFormData(), [buyOrders])

  useEffect(() => {
    if (buyOrderToUpdate) {
      setFormData(buyOrderToUpdate)
    }
  }, [buyOrderToUpdate])

  const handleOnSubmit = () => onAddBuyOrders(formData, () => null)

  const handleOnUpdate = () => onUpdateBuyOrders(formData, cleanFormData)

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
      isUpdating={ isUpdating }
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
  buyOrderToUpdate: state.buyOrders.buyOrderToUpdate,
  isUpdating: state.buyOrders.buyOrderToUpdate ? true : false
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction> ) => ({
  onAddBuyOrders: (formData: IBuyOrder, cb: () => void) => dispatch( actions.buyOrderAdd(formData, cb) ),
  onUpdateBuyOrders: (formData: IBuyOrder, cb: () => void) => dispatch( actions.buyOrderUpdateSubmit(formData, cb) )
})

export const BuyOrderForm =  connect(mapStateToProps, mapDispatchToProps)(Container)