import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { categories_list, product_list, shops_list } from '../../../product_list';
import { Colors } from '../../../styles';
import { SvgArrowDropDown } from '../../../assets/icons/SvgArrowDropDown';

const OffersScreen = () => {
  const [sortArray, setSortArray] = useState(categories_list);
  const sortTitle = useRef('Categories');

  const handleSort = useCallback((sortBy: string) => {
    switch (sortBy) {
      case 'Categories':
        sortTitle.current = 'Stores';
        setSortArray(shops_list);
        break;
      case 'Stores':
        sortTitle.current = 'Categories';
        setSortArray(categories_list);
        break;
    }
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 110 }}>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={() => handleSort(sortTitle.current)}
      >
        <Text style={styles.sortedTitle}>Sorted by {sortTitle.current}</Text>
        <View style={{ width: 16, height: 16 }}>
          <SvgArrowDropDown />
        </View>
      </TouchableOpacity>
      {sortArray.map((category) => {
        return (
          <View key={category.id}>
            <Text style={styles.title}>{category.name}</Text>
            {product_list
              .filter((item) =>
                sortTitle.current === 'Stores'
                  ? item.shops.includes(category.name)
                  : item.categories.includes(category.name),
              )
              .map((product) => {
                return (
                  <View key={product.id} style={styles.productContainer}>
                    <Image
                      source={require('../../../assets/images/0.jpeg')}
                      style={{ width: 50, height: 60, marginRight: 24 }}
                    />
                    <View>
                      <Text style={styles.productTitle}>{product.title}</Text>
                      <Text style={styles.productWeight}>{product.weight} gr</Text>
                      <Text style={styles.productPrice}>{product.price}kr</Text>
                    </View>
                  </View>
                );
              })}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 24 },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.MAIN,
    margin: 20,
    marginTop: 0,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'white',
    marginHorizontal: 24,
    height: 100,
    shadowColor: Colors.MAIN,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,

    elevation: 5,
    borderRadius: 24,
    marginBottom: 24,
  },
  productTitle: {
    fontSize: 20,
  },
  productWeight: {
    color: Colors.DARKGREY,
  },
  productPrice: {
    fontWeight: '600',
    fontSize: 24,
    paddingTop: 4,
  },
  sortedTitle: {
    fontSize: 18,
    fontWeight: '500',
    margin: 16,
  },
});
export default OffersScreen;
