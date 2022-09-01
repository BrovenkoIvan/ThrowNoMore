import React, { useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { HomeStackScreenList } from '../../navigators/StackScreenList';
import { EHomeStack } from '../../constants/navigation';
import { Header } from '../components/Header';
import { SvgBack } from '../../assets/icons/SvgBack';
import { Colors } from '../../styles';
import { useCart } from '../../context/Cart/hooks';

type ProductScreenRouteProp = RouteProp<HomeStackScreenList, EHomeStack.Product>;

const ProductScreen: React.FC = () => {
  const { cartList, incrementQuantity, decrementQuantity } = useCart();

  const {
    params: { product },
  } = useRoute<ProductScreenRouteProp>();
  const { goBack } = useNavigation();

  const currentItem = cartList.find((item) => item.id === product.id);

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleDecrementQuantity = useCallback(() => {
    decrementQuantity(product);
  }, [decrementQuantity, product]);

  const handleIncrementQuantity = useCallback(() => {
    incrementQuantity(product);
  }, [incrementQuantity, product]);

  return (
    <>
      <Header title={product.title} />
      <View style={styles.productContainer}>
        <View style={styles.productHeader}>
          <TouchableOpacity style={styles.icon} onPress={handleBack}>
            <SvgBack fill={Colors.MAIN} />
          </TouchableOpacity>
          <View>
            <Text style={styles.productWeight}>{product.weight} gr.</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 24 }}>
          <View>
            <Image
              source={require('./../../assets/images/0.jpeg')}
              style={{ width: 230, height: 230 }}
              resizeMode={'contain'}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              color: Colors.DARKGREY,
              textDecorationLine: 'line-through',
            }}
          >
            {product.price} kr
          </Text>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>
            {(product.price * 0.7).toFixed(2)} kr
          </Text>
          <View style={styles.counter}>
            <TouchableOpacity style={styles.button} onPress={handleDecrementQuantity}>
              <Text style={styles.buttonTitle}>-</Text>
            </TouchableOpacity>
            <View style={[styles.button, { backgroundColor: 'white' }]}>
              <Text style={styles.buttonTitle}>{currentItem?.quantity ?? 0}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleIncrementQuantity}>
              <Text style={styles.buttonTitle}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    marginTop: 150,
    backgroundColor: 'white',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    padding: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
  counter: {
    flexDirection: 'row',
    width: 130,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.BlueGrey,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontWeight: '600',
    fontSize: 24,
  },
  productWeight: {
    fontWeight: '500',
    fontSize: 18,
    color: Colors.DARKGREY,
  },
});

export default ProductScreen;
