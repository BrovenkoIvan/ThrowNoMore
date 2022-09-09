import React, { memo } from 'react';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';
import { Colors } from '../../../styles';

export const SvgHomeFilled = memo(() => (
  <Svg height="34px" viewBox="0 0 24 24" width="34px">
    <Defs>
      <LinearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="100%">
        <Stop offset="0" stopColor={Colors.Gradient_1} />
        <Stop offset="1" stopColor={Colors.Gradient_2} />
      </LinearGradient>
    </Defs>
    <Path d="M0 0h24v24H0z" />
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="url(#grad)" />
  </Svg>
));
