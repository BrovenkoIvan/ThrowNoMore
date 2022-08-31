import React, { useState } from 'react';
import { View, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { Header } from '../components/Header';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: '#ff4081' }} />;

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: '#673ab7' }} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
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
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderTabBarItem={() => {
              return (
                <TouchableOpacity style={{ flex: 0.5 }}>
                  <Text>1</Text>
                </TouchableOpacity>
              );
            }}
            style={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
          />
        )}
      />
    </>
  );
};
// {/*// renderTabBar={(props) => <RenderTabBar {...props} />}*/}
export default NotificationsScreen;
