import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  colors,
  fonts,
  IconArrowRight,
  IconCart,
  IconCompass,
  IconElectronic,
  IconPin,
  IconWorld,
  IMGHandsanitizer,
  IMGMask,
  IMGSambalRoa,
  IMGSneakers,
  IMGTarantula,
  WellshopLogo,
} from '../../assets';
import {Button, Gap} from '../../components';
import {FormInput} from '../../components';
import Carousel from '../../components/molecules/Carousel';

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
