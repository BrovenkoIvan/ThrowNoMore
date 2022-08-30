import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabsStackScreenList } from "./StackScreenList";
import { ETabsStack } from "../constants/navigation";
import { CartScreen,  NotificationsScreen, SettingScreen } from "../screens";
import { SvgHomeFilled } from "../assets/icons/TabIcon/SvgHomeFilled";
import { SvgHomeOutlined } from "../assets/icons/TabIcon/SvgHomeOutlined";
import { SvgNotificationsFilled } from "../assets/icons/TabIcon/SvgNotificationsFilled";
import { SvgNotificationsOutlined } from "../assets/icons/TabIcon/SvgNotificationsOutlined";
import { SvgCartFilled } from "../assets/icons/TabIcon/SvgCartFilled";
import { SvgCartOutlined } from "../assets/icons/TabIcon/SvgCartOutlined";
import { SvgSettingFilled } from "../assets/icons/TabIcon/SvgSettingFilled";
import { SvgSettingOutlined } from "../assets/icons/TabIcon/SvgSettingOutlined";
import HomeNavigator from "./HomeNavigator";


const { Navigator, Screen } = createBottomTabNavigator<TabsStackScreenList>()

const TabsNavigator = () => {
  return(
    <Navigator screenOptions={ ({route}) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused }) => {
        if (route.name === ETabsStack.Home) {
          if (focused){
            return <SvgHomeFilled/>
          } else {
            return <SvgHomeOutlined/>
          }
        } else if (route.name === ETabsStack.Notifications) {
          if (focused){
            return <SvgNotificationsFilled/>
          } else {
            return <SvgNotificationsOutlined/>
          }
        } else if (route.name === ETabsStack.Cart) {
          if (focused){
            return <SvgCartFilled/>
          } else {
            return <SvgCartOutlined/>
          }
        } else if (route.name === ETabsStack.Setting) {
          if (focused){
            return <SvgSettingFilled/>
          } else {
            return <SvgSettingOutlined/>
          }
        }
      }
    })}>
      <Screen name={ETabsStack.Home} component={HomeNavigator}/>
      <Screen name={ETabsStack.Notifications} component={NotificationsScreen}/>
      <Screen name={ETabsStack.Cart} component={CartScreen}/>
      <Screen name={ETabsStack.Setting} component={SettingScreen}/>
    </Navigator>
  )
}

export default TabsNavigator
