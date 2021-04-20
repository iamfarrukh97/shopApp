import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import ReduxThunk from 'redux-thunk';

import productReducer from './src/store/reducers/product';
import cartReducer from './src/store/reducers/cart';
import orderReducer from './src/store/reducers/order';
import ProductNavigator from './src/navigation/shopNavigator';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = props => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ProductNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
