import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgLogo } from '../../assets/icons/SvgLogo';

interface HeaderProps {
  title: string;
  bottomRadius?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, bottomRadius = true }) => {
  const topIndent = useSafeAreaInsets().top;

  return (
    <View
      style={[
        styles.container,
        { paddingTop: topIndent, height: 50 + topIndent },
        bottomRadius && { borderBottomEndRadius: 24, borderBottomStartRadius: 24 },
      ]}
    >
      <View style={styles.logo}>
        <SvgLogo />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  logo: {
    width: 60,
    height: 40,
    justifyContent: 'center',
  },
});
