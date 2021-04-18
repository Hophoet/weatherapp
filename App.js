import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import Store from './redux/store/storeConfigurations'
             

import {
  Text,
  View,
} from 'react-native';

import Nav from './navigations/Main';


const App: () => Node = () => {

  let persistor = persistStore(Store)
  return (
	   <Provider store={Store}>
			<PersistGate persistor={persistor}>
				<Nav/>
			</PersistGate>
       </Provider>

  );
};

export default App;
