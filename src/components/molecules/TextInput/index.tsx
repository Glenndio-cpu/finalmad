import {StyleSheet, Text, View, TextInput as Input, TextInputProps} from 'react-native';
import React from 'react';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  placeholder?: string;
}

const TextInput: React.FC<CustomTextInputProps> = ({label, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 25,
    padding: 10,
  },
});
