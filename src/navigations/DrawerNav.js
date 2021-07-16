import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text, Button} from 'react-native';
import {Icon, Badge} from 'react-native-elements';

const DrawerNav = createDrawerNavigator();

const CustomDrawerContent = props => {
  //   console.log(props);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Setting"
          onPress={() => props.navigation.navigate('Setting')}
          activeTintColor={'tomato'}
          icon={() => {
            return (
              <Icon
                name={'cog'}
                type="font-awesome"
                // size={propssize}
                color={'gray'}
              />
            );
          }}
          activeBackgroundColor={'blue'}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerNavigator = () => {
  return (
    <DrawerNav.Navigator
      drawerPosition="right"
      drawerType="slide"
      overlayColor={'transparent'}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <DrawerNav.Screen
        name="Root"
        component={StackNav}
        options={{
          swipeEnabled: false,
          drawerIcon: () => null,
          drawerLabel: () => null,
        }}
      />
      <DrawerNav.Screen name="Setting" component={SettingSscreen} />
    </DrawerNav.Navigator>
  );
};
