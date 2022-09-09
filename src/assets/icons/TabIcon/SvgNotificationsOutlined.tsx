import React, { memo } from 'react';
import Svg, { LinearGradient, Path, Stop } from 'react-native-svg';
import { Colors } from '../../../styles';

export const SvgNotificationsOutlined = memo(() => (
  <Svg height="32px" viewBox="0 0 24 24" width="32px">
    <LinearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="100%">
      <Stop offset="0" stopColor={Colors.Gradient_1} />
      <Stop offset="1" stopColor={Colors.Gradient_2} />
    </LinearGradient>
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path
      d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
      fill="url(#grad)"
    />
  </Svg>
));
