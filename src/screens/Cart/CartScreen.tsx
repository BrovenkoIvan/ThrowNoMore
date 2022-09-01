import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Header } from '../components/Header';
import { RenderCartItem } from './components/RenderCartItem';
import { Colors } from '../../styles';
import { useStore } from '../../store';
import { observer } from 'mobx-react-lite';

const CartScreen: React.FC = observer(() => {
  const {
    classes: { items },
  } = useStore();

  const totalPrice = items
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  const totalGr = items
    .map((item) => item.weight * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <>
      <Header title={'Shopping List'} />
      <View style={styles.listContainer}>
        <FlatList
          data={items}
          renderItem={({ item }) => <RenderCartItem item={item} />}
          style={{ paddingTop: 16 }}
          contentContainerStyle={{ paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {items.length ? (
        <View style={styles.amountContainer}>
          <Text
            style={{
              fontSize: 22,
              color: Colors.MAIN,
              textAlign: 'right',
              paddingBottom: 8,
            }}
          >
            You will saving {items.length} products: {totalGr} gr. and{' '}
            {(totalPrice * 0.3).toFixed(2)} kr
          </Text>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>
            Total: {totalPrice.toFixed(2)} kr
          </Text>
        </View>
      ) : null}
    </>
  );
});

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
  amountContainer: {
    backgroundColor: Colors.LightMain,
    height: 250,
    paddingBottom: 120,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 16,
  },
});

export default CartScreen;
