import React,{ memo } from "react";
import Svg, { Path } from "react-native-svg";


export const SvgBack = memo<{fill?: string}>(({fill='black'}) => {
  return(
    <Svg height="100%" viewBox="0 0 24 24" width="100%" fill={fill}>
      <Path d="M0 0h24v24H0z" fill="none"/>
      <Path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>
    </Svg>
  )
})
