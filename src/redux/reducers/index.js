import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProductReducer from './ProductReducer';
import DataReducer from './dataReducer';

export default combineReducers({
  Auth: AuthReducer,
  Products: ProductReducer,
  Kucing: DataReducer,
});
