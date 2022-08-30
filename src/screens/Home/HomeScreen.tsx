import React from "react";
import { View,  StyleSheet, FlatList } from "react-native";
import { Header } from "../components/Header";
import { product_list } from "../../product_list";
import { RenderProduct } from "./components/RenderProduct";

const HomeScreen: React.FC = () => {
  return(
    <>
      <Header title={'Home'}/>
       <View style={styles.listContainer}>
         <FlatList
           data={product_list}
           renderItem={({ item }) => <RenderProduct item={item}/>}
           contentContainerStyle={{paddingTop: 16}}
         />
       </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1},
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginTop: 150,
    paddingTop: 16
  }
})

export default HomeScreen
