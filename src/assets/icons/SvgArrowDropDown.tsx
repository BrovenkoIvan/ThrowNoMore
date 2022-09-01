import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const SvgArrowDropDown = memo(() => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 18 12" fill="none">
      <Path
        d="M2 0C1.17595 0 0.705573 0.940764 1.2 1.6L8.2 10.9333C8.6 11.4667 9.4 11.4667 9.8 10.9333L16.8 1.6C17.2944 0.940764 16.824 0 16 0H2Z"
        fill="#2F2F2F"
      />
    </Svg>
  );
});
