import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/navigations/AuthStack';
import AuthStackHome from './src/navigations/AuthStackHome';
import {connect} from 'react-redux';
import {KeepLogin, GetProductAction} from './src/redux/actions';
import {View, Text} from 'react-native';

const App = ({dataUser, KeepLogin, GetProductAction}) => {
  useEffect(() => {
    KeepLogin();
    GetProductAction();
  }, []);

  if (dataUser.isloading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 35, color: 'white'}}>Splash Screen</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {dataUser.isLogin ? <AuthStackHome /> : <AuthStack />}
    </NavigationContainer>
  );
};

const MapstatetoProps = ({Auth}) => {
  return {
    dataUser: Auth,
  };
};

export default connect(MapstatetoProps, {KeepLogin, GetProductAction})(App);
