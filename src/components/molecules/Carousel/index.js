import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, IMGDashboard} from '../../../assets';
import Swiper from 'react-native-swiper';

const Carousel = () => {
  return (
    <Swiper
      style={styles.carouselWrapper}
      showsPagination={false}
      dotStyle={{
        backgroundColor: colors.green,
        opacity: 0.5,
      }}
      activeDotStyle={{backgroundColor: colors.green}}>
      <View style={styles.slide1}>
        <Image source={IMGDashboard} style={styles.carouselPicture} />
      </View>
      <View style={styles.slide1}>
        <Image source={IMGDashboard} style={styles.carouselPicture} />
      </View>
      <View style={styles.slide1}>
        <Image source={IMGDashboard} style={styles.carouselPicture} />
      </View>
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselWrapper: {},
  slide1: {
    flex: 1,
    alignItems: 'center',
  },
  carouselPicture: {
    height: 160,
    width: 360,
    borderRadius: 8,
  },
});
