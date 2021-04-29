import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {colors, fonts, IconStar, IMGKeyboard} from '../../assets';
import {Button} from '../../components';

const Item = ({title, price}) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.productTopContainer}>
        <Image source={IMGKeyboard} style={styles.productPicture} />
      </View>
      <View style={styles.productBottomContainer}>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>Rp {price}</Text>
        <TouchableOpacity>
          <Text style={styles.productShop}>BronzeCom Manado</Text>
        </TouchableOpacity>
        <View style={styles.rating}>
          <IconStar />
          <Text style={styles.starRating}>5.0</Text>
          <Text style={styles.subRating}>{'(2)   |   Terjual 2'}</Text>
        </View>
        <Button
          title="Beli"
          height={25}
          paddingHorizontal={0}
          color={colors.green}
          radius={5}
          fontSize={12}
        />
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  productContainer: {
    height: 282,
    width: 180,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 10,
    marginVertical: 7.5,
    marginHorizontal: 7.5,
    marginTop: 10,
  },
  productTopContainer: {
    height: 150,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  productBottomContainer: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    paddingHorizontal: 12,
    paddingBottom: 10,
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  productPicture: {
    width: 150,
    height: 180,
  },
  productTitle: {
    fontFamily: fonts.Roboto.light,
    fontSize: 14,
  },
  productPrice: {
    fontFamily: fonts.Roboto.regular,
    fontSize: 14,
  },
  productShop: {
    fontSize: 8,
    color: colors.grey,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starRating: {
    fontSize: 8,
    marginHorizontal: 4,
  },
  subRating: {
    fontSize: 8,
    color: colors.grey,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
