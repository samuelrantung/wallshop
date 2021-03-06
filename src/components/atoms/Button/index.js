import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../assets';
// import colors from '../../../assets/';
import IconOnly from './IconOnly';

const Button = ({
  title,
  type,
  paddingHorizontal = 55,
  height = 43,
  color = colors.primaryRed,
  radius = 15,
  onPress,
  icon,
  width,
  fontSize = 18,
}) => {
  if (type === 'icon-only') {
    return (
      <IconOnly icon={icon} onPress={onPress} width={width} height={height} />
    );
  } else {
    return (
      <View style={styles.buttonContainer(paddingHorizontal, height)}>
        <TouchableOpacity
          style={styles.button(color, radius)}
          onPress={onPress}>
          <Text style={styles.buttonText(fontSize)}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: (paddingHorizontal, height) => ({
    width: '100%',
    paddingHorizontal: paddingHorizontal,
    height: height,
  }),
  button: (color, radius) => ({
    backgroundColor: color,
    flex: 1,
    borderRadius: radius,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  buttonText: fontSize => ({
    // fontFamily: fonts.Poppins.regular,
    fontSize: fontSize,
    color: colors.white,
  }),
});
