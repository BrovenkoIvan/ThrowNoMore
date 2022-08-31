import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../../styles';

//props: SceneRendererProps & {
//     navigationState: NavigationState<{ key: string; title: string }>;
//   }

const RenderTabBar = ({ ...props }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={{ backgroundColor: Colors.MAIN, flex: 0.5 }}>
        <Text>123123123</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: Colors.LightMain, flex: 0.5 }}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderTabBar;
