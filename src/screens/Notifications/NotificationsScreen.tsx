import React, { useState } from 'react';
import { View, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { Header } from '../components/Header';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../styles';

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: 'white' }} />;

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: '#636363' }} />;

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
            renderIndicator={() => null}
            renderTabBarItem={(props) => {
              console.log('props', JSON.stringify(props, null, 2));
              const { route } = props;
              return (
                <TouchableOpacity
                  style={{ height: 50, flex: 0.5 }}
                  activeOpacity={0.9}
                  key={props.key}
                >
                  <LinearGradient
                    colors={[Colors.Gradient_1, Colors.Gradient_2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <Text>{route.title}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
            style={{
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
              backgroundColor: 'white',
            }}
          />
        )}
      />
    </>
  );
};

export default NotificationsScreen;
