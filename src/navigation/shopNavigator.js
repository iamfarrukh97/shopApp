import React from 'react';
import {Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import OrderScreen from '../screens/shop/OrdersScreen';
import UserProductScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProduct';
import Colors from '../constants/colos';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/HeaderButton';
import CartScreen from '../screens/shop/CartScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};
const ProductNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName="ProductOverview"
      screenOptions={{
        headerStyle: defaultNavOption.headerStyle,
        headerTintColor: defaultNavOption.headerTintColor,
      }}>
      <Stack.Screen
        name="ProductOverview"
        component={ProductOverviewScreen}
        options={{title: 'Products'}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{title: 'Cart'}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({route}) => ({
          title: route.params.productTitle,
        })}
      />
    </Stack.Navigator>
  );
};
const OrderNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName="OrderScreen"
      screenOptions={{
        headerStyle: defaultNavOption.headerStyle,
        headerTintColor: defaultNavOption.headerTintColor,
      }}>
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{title: 'Orders'}}
      />
    </Stack.Navigator>
  );
};
const AdminNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName="UserProductScreen"
      screenOptions={{
        headerStyle: defaultNavOption.headerStyle,
        headerTintColor: defaultNavOption.headerTintColor,
      }}>
      <Stack.Screen
        name="UserProductScreen"
        component={UserProductScreen}
        options={{title: 'Your Products'}}
      />
      <Stack.Screen
        name="EditProductScreen"
        component={EditProductScreen}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};
const ShopNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
        activeBackgroundColor: Colors.active,
        labelStyle: {fontWeight: 'bold'},
        // itemStyle: {marginVertical: 30},
      }}
      drawerStyle={{
        // backgroundColor: Colors.drawer,
        width: 240,
      }}>
      <Drawer.Screen
        name="Products"
        component={ProductNavigator}
        options={{
          title: 'Product',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              color={focused ? Colors.primary : 'black'}
              size={24}
              name={
                focused
                  ? Platform.OS === 'android'
                    ? 'md-cart'
                    : 'ios-cart'
                  : Platform.OS === 'android'
                  ? 'md-cart-outline'
                  : 'ios-cart-outline'
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrderNavigator}
        options={{
          title: 'Orders',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              color={focused ? Colors.primary : 'black'}
              size={24}
              name={
                focused
                  ? Platform.OS === 'android'
                    ? 'md-list'
                    : 'ios-list'
                  : Platform.OS === 'android'
                  ? 'md-list-outline'
                  : 'ios-list-outline'
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AdminNavigator"
        component={AdminNavigator}
        options={{
          title: 'Admin',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              color={focused ? Colors.primary : 'black'}
              size={24}
              name={
                focused
                  ? Platform.OS === 'android'
                    ? 'md-create'
                    : 'ios-create'
                  : Platform.OS === 'android'
                  ? 'md-create-outline'
                  : 'ios-create-outline'
              }
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default ShopNavigator;
