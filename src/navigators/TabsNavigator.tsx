import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsStackScreenList } from './StackScreenList';
import { ETabsStack } from '../constants/navigation';
import { CartScreen, NotificationsScreen, SettingScreen } from '../screens';
import { SvgHomeFilled } from '../assets/icons/TabIcon/SvgHomeFilled';
import { SvgHomeOutlined } from '../assets/icons/TabIcon/SvgHomeOutlined';
import { SvgNotificationsFilled } from '../assets/icons/TabIcon/SvgNotificationsFilled';
import { SvgNotificationsOutlined } from '../assets/icons/TabIcon/SvgNotificationsOutlined';
import { SvgCartFilled } from '../assets/icons/TabIcon/SvgCartFilled';
import { SvgCartOutlined } from '../assets/icons/TabIcon/SvgCartOutlined';
import { SvgSettingFilled } from '../assets/icons/TabIcon/SvgSettingFilled';
import { SvgSettingOutlined } from '../assets/icons/TabIcon/SvgSettingOutlined';
import HomeNavigator from './HomeNavigator';
import { Colors } from '../styles';
import { StyleSheet } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator<TabsStackScreenList>();

const TabsNavigator = () => {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          if (route.name === ETabsStack.Home) {
            if (focused) {
              return <SvgHomeFilled />;
            } else {
              return <SvgHomeOutlined />;
            }
          } else if (route.name === ETabsStack.Notifications) {
            if (focused) {
              return <SvgNotificationsFilled />;
            } else {
              return <SvgNotificationsOutlined />;
            }
          } else if (route.name === ETabsStack.Cart) {
            if (focused) {
              return <SvgCartFilled />;
            } else {
              return <SvgCartOutlined />;
            }
          } else if (route.name === ETabsStack.Setting) {
            if (focused) {
              return <SvgSettingFilled />;
            } else {
              return <SvgSettingOutlined />;
            }
          }
        },
      })}
    >
      <Screen name={ETabsStack.Home} component={HomeNavigator} />
      <Screen name={ETabsStack.Notifications} component={NotificationsScreen} />
      <Screen name={ETabsStack.Cart} component={CartScreen} />
      <Screen name={ETabsStack.Setting} component={SettingScreen} />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    paddingBottom: 0,
    borderTopWidth: 0,
    shadowColor: Colors.MAIN,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,

    elevation: 5,
    borderRadius: 24,
  },
});
export default TabsNavigator;
