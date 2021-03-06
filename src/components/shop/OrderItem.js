import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Colors from '../../constants/colos';
import CartItem from './CartItem';
import Card from '../UI/Card';
const OrderItem = props => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Card style={styles.ordetItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        title={showDetails ? 'Hide Details' : 'Show Details'}
        color={Colors.primary}
        onPress={() => setShowDetails(prevState => !prevState)}
      />
      {showDetails && (
        <View style={styles.detailsItem}>
          {props.items.map(cartItem => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  ordetItem: {
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  totalAmount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    color: '#888',
  },
  detailsItem: {
    width: '100%',
  },
});

export default OrderItem;
