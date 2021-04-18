import {createStore, combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from './reducers/location';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({reducer});

export default createStore(
  persistReducer(persistConfig, reducer),
);
