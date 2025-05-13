import { StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import React from 'react';
import { ArrowBack } from '../../../assets/icon';

// 1. Buat tipe props-nya
type ButtonProps = {
  label?: string;
  color?: string;
  textColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
  type?: 'icon-only';
  icon?: 'icon-back';
};

const Button: React.FC<ButtonProps> = ({
  label,
  color = '#ab8a54',
  textColor = '#020202',
  onPress,
  type,
  icon,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <ArrowBack />}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

// 2. Ubah style ke objek statis, gunakan style dinamis di dalam komponen via array
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 25,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textAlign: 'center',
  },
});
