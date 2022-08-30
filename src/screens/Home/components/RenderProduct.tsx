import React, { useCallback } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IProduct } from "../../../types";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import { useNavigation } from "@react-navigation/native";
import { EHomeStack } from "../../../constants/navigation";

interface RenderProductProps {
  item: IProduct,
}
type navigationProps = NativeStackNavigatorProps

export const RenderProduct:React.FC<RenderProductProps> = ({item}) => {

  const {navigate} = useNavigation<navigationProps>()

  const handleProduct = useCallback(( item: IProduct ) => {
    navigate({ name: EHomeStack.Product, params:{product: item} })
  }, [navigate])

  return(
    <TouchableOpacity style={styles.container} onPress={() => handleProduct(item)}>
      <View style={{flex: 0.5, alignItems: 'center', paddingRight: 24}} >
        <Image source={require('../../../assets/images/0.jpeg')} style={{width: 60, height: 60}} resizeMode={'contain'}/>
      </View>
      <View style={{flex: 0.5, alignItems: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
        <View style={{justifyContent: 'space-between'}}>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Text>{item.weight} g</Text>
          <Text style={styles.price}>{(item.price * 0.7).toFixed(2)} kr</Text>
        </View>
        <View>
          <Text>{item.quantityLeft} left</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  price: {
    fontWeight: '600',
    fontSize: 16

  }
})
