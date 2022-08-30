import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EMainStack } from "../constants/navigation";
import { MainStackScreenList } from "./StackScreenList";
import TabsNavigator from "./TabsNavigator";
import { NavigationContainer } from "@react-navigation/native";

const {Navigator, Screen} = createNativeStackNavigator<MainStackScreenList>();

const MainNavigator = () => (
  <NavigationContainer>
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={EMainStack.Main} component={TabsNavigator}/>
    </Navigator>
  </NavigationContainer>
)

export default MainNavigator
