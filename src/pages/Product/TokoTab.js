import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {colors} from '../../assets';
import Item from './Item';
import Shop from './Shop';
import ShopData from './ShopData';

const Toko = () => {
  const renderItem = ({item}) => (
    <Shop
      shopName={item.shopName}
      location={item.location}
      rating={item.rating}
    />
  );
  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={ShopData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Toko;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
