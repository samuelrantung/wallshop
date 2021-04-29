import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {colors, fonts, IconStar, IMGKeyboard, IMGShopLogo} from '../../assets';
import {Button} from '../../components';

const Shop = ({shopName, location, rating}) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.logoContainer}>
        <Image source={IMGShopLogo} style={styles.shopLogo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.shopNameText}>{shopName}</Text>
        <View style={styles.locationContainer}>
          <Button type="icon-only" icon="icon-pin-small" />
          <Text style={styles.locationText}>{location}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <IconStar />
          <Text style={styles.starRating}>{rating}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Ikuti" space={105} height={5} />
          <Button title="Lihat Toko" space={105} height={5} />
        </View>
      </View>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  productContainer: {
    height: 133,
    width: 375,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  logoContainer: {
    backgroundColor: colors.white,
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopNameText: {
    fontSize: 18,
    color: colors.primaryBlack,
  },
  textContainer: {
    marginLeft: 24,
    justifyContent: 'space-between',
    height: 100,
    width: 217,
  },
  locationText: {
    fontSize: 12,
    color: colors.grey,
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starRating: {
    fontSize: 12,
    marginLeft: 5,
  },
});
