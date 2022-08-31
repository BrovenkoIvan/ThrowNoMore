import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../../styles";

export const SvgHomeOutlined = memo(() => {
  return(
    <Svg height="28px" viewBox="0 0 24 24" width="28px" fill={Colors.DARKGREY}>
      <Path d="M0 0h24v24H0V0z" fill="none"/>
      <Path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
    </Svg>
  )
})