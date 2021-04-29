import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {colors} from '../../assets';
import Item from './Item';
import ItemDATA from './ItemData';

const Produk = () => {
  const renderItem = ({item, price}) => (
    <Item title={item.title} price={item.price} />
  );
  return (
    <View style={styles.contentContainer}>
      <FlatList
        numColumns={2}
        data={ItemDATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Produk;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
