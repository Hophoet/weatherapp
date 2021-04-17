import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
} from 'react-native';

import Nav from './navigations/Main';


const App: () => Node = () => {

  return (
	<Nav/>
  );
};

export default App;
