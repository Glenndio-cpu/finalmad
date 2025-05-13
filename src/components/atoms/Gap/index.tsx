import { View, ViewStyle } from 'react-native';
import React from 'react';

interface GapProps {
  height: number;
}

const Gap: React.FC<GapProps> = ({ height }) => {
  const gapStyle: ViewStyle = { height };
  return <View style={gapStyle} />;
};

export default Gap;
