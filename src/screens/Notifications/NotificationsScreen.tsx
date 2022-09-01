import React, { useState } from 'react';
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { Header } from '../components/Header';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../styles';
import TipsForYouScreen from './components/TipsForYouScreen';
import OffersScreen from './components/OffersScreen';

const renderScene = SceneMap({
  first: OffersScreen,
  second: TipsForYouScreen,
});

const NotificationsScreen: React.FC = () => {
  const { width } = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'first', title: 'Offers' },
    { key: 'second', title: 'Tips for you' },
  ]);

  return (
    <>
      <Header title={'Notifications'} bottomRadius={false} />
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              renderIndicator={() => null}
              renderTabBarItem={({ route, key, navigationState }) => {
                const focused = route.key === props.navigationState.routes[index].key;
                const titleColor = focused ? { color: 'white' } : { color: 'black' };
                const borderRadius =
                  navigationState.index === 0
                    ? { borderBottomLeftRadius: 24 }
                    : { borderBottomRightRadius: 24 };

                return (
                  <TouchableOpacity
                    onPress={() => props.jumpTo(route.key)}
                    style={{ height: 50, flex: 0.5 }}
                    activeOpacity={0.9}
                    key={key}
                  >
                    {focused ? (
                      <LinearGradient
                        colors={[Colors.Gradient_1, Colors.Gradient_2]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={[styles.gradient, borderRadius]}
                      >
                        <View style={styles.tabBatTitleContainer}>
                          <Text style={[styles.tabBatTitle, titleColor]}>
                            {route.title}
                          </Text>
                        </View>
                      </LinearGradient>
                    ) : (
                      <View style={styles.tabBatTitleContainer}>
                        <Text style={[styles.tabBatTitle, titleColor]}>
                          {route.title}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>
                );
              }}
              style={styles.tabBarStyle}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: 'white',
    shadowColor: Colors.MAIN,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  tabBatTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  tabBatTitle: { color: 'white', fontWeight: '500', fontSize: 18 },
  gradient: {
    width: '100%',
    height: '100%',
  },
});

export default NotificationsScreen;
