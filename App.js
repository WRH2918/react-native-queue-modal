/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {RootSiblingParent} from 'react-native-root-siblings';
import RootStack from './src/routes/index';
const App = () => {
  return (
    <>
      <RootSiblingParent>
        <RootStack />
      </RootSiblingParent>
    </>
  );
};

export default App;
