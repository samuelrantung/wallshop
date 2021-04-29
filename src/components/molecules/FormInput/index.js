import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {colors, fonts} from '../../../assets';
import {Button} from '../../../components';

const FormInput = ({label, placeholder, icon, password}) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={password}
          style={styles.textInput}
        />
        <Button type="icon-only" icon={icon} />
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  formContainer: {
    width: 339,
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryBlack,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 4,
  },
  textInput: {
    fontFamily: fonts.Roboto.regular,
    fontSize: 18,
  },
  label: {
    fontFamily: fonts.Roboto.regular,
    fontSize: 14,
    marginBottom: 4,
  },
});
