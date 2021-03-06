import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import Card from '../UI/Card';
import Colors from '../../constants/colos';

const ProductItem = props => {
  const Touchable = ({onPress, children}) =>
    Platform.OS === 'android' ? (
      <TouchableNativeFeedback onPress={onPress}>
        {children}
      </TouchableNativeFeedback>
    ) : (
      <TouchableOpacity
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#fff', false)}>
        {children}
      </TouchableOpacity>
    );
  return (
    <Card style={styles.products}>
      <View style={styles.touchable}>
        <Touchable onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: props.image}} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>{props.children}</View>
          </View>
        </Touchable>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  products: {
    height: 300,
    margin: 20,
  },
  touchable: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
});

export default ProductItem;
