import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EHomeStack } from "../constants/navigation";
import { HomeScreen } from "../screens";
import { ProductScreen } from "../screens/Home";
import { HomeStackScreenList } from "./StackScreenList";


const {Navigator, Screen} = createNativeStackNavigator<HomeStackScreenList>();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name={EHomeStack.List} component={HomeScreen}/>
    <Screen name={EHomeStack.Product} component={ProductScreen}/>
  </Navigator>
)

export default HomeNavigator
