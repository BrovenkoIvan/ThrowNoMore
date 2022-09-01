import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IProduct } from '../../../types';
import { Colors } from '../../../styles';
import { useCart } from '../../../context/Cart/hooks';

export const RenderCartItem: React.FC<{ item: IProduct }> = ({ item }) => {
  const { incrementQuantity, decrementQuantity } = useCart();

  const handleDecrementQuantity = useCallback(() => {
    decrementQuantity(item);
  }, [decrementQuantity, item]);

  const handleIncrementQuantity = useCallback(() => {
    incrementQuantity(item);
  }, [incrementQuantity, item]);

  const totalPrice = item.price * item.quantity;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/0.jpeg')}
        style={{ width: 50, height: 50 }}
        resizeMode={'contain'}
      />
      <Text style={styles.title}>{item.title}</Text>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.counter}>
          <TouchableOpacity style={styles.button} onPress={handleDecrementQuantity}>
            <Text style={styles.buttonTitle}>-</Text>
          </TouchableOpacity>
          <Text style={styles.count}>{item.quantity}</Text>
          <TouchableOpacity style={styles.button} onPress={handleIncrementQuantity}>
            <Text style={styles.buttonTitle}>+</Text>
          </TouchableOpacity>
        </View>
        <Text>{totalPrice.toFixed(2)} kr</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARKGREY,
  },
  title: {
    fontSize: 18,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  button: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: Colors.MAIN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: Colors.MAIN,
    marginHorizontal: 8,
    fontWeight: '500',
    fontSize: 18,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: '500',
  },
});
