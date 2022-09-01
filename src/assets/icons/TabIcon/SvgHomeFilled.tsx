import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../../styles';

export const SvgHomeFilled = memo(() => (
  <Svg height="34px" viewBox="0 0 24 24" width="34px" fill={Colors.MAIN}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </Svg>
));
