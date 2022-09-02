import React, { useMemo } from 'react';
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
import { useCart } from '../context/Cart/hooks';

const { Navigator, Screen } = createBottomTabNavigator<TabsStackScreenList>();

const TabsNavigator = () => {
  const { cartList } = useCart();

  const cartCounter = useMemo(
    () =>
      cartList.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0),
    [cartList],
  );

  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case ETabsStack.Home:
              return focused ? <SvgHomeFilled /> : <SvgHomeOutlined />;
            case ETabsStack.Notifications:
              return focused ? <SvgNotificationsFilled /> : <SvgNotificationsOutlined />;
            case ETabsStack.Cart:
              return focused ? <SvgCartFilled /> : <SvgCartOutlined />;
            case ETabsStack.Setting:
              return focused ? <SvgSettingFilled /> : <SvgSettingOutlined />;
          }
        },
      })}
    >
      <Screen name={ETabsStack.Home} component={HomeNavigator} />
      <Screen name={ETabsStack.Notifications} component={NotificationsScreen} />
      <Screen
        name={ETabsStack.Cart}
        component={CartScreen}
        options={cartCounter !== 0 ? { tabBarBadge: cartCounter } : {}}
      />
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
