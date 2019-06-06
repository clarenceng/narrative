import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { buyOrderReducer } from './reducers';

const rootReducer = combineReducers({
  buyOrders: buyOrderReducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
