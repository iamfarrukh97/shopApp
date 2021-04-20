import React, {useLayoutEffect, useState, useEffect} from 'react';
import {View, FlatList, Button, Alert, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/colos';
import * as productsActions from '../../store/actions/products';

const UserProductScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const userProducts = useSelector(state => state.products.userProducts);

  const editePorductHandler = id => {
    props.navigation.navigate('EditProductScreen', {
      productId: id,
      title: 'Edit Product',
    });
  };
  const deleteHandler = id => {
    try {
      Alert.alert('Are you sure?', 'Are you really want to delete this item?', [
        {text: 'No', style: 'default'},
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => {
            setIsLoading(true);
            dispatch(productsActions.deleteProduct(id)).then(() => {
              setIsLoading(false);
            });
          },
        },
      ]);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    if (error) {
      Alert.alert('An error occured', error, [{text: 'Okay'}]);
    }
  }, [error]);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'menu' : 'ios-menu'}
            onPress={() => props.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add"
            iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            onPress={() => {
              props.navigation.navigate('EditProductScreen', {
                title: 'Add Product',
              });
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            editePorductHandler(itemData.item.id);
          }}>
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editePorductHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductScreen;
