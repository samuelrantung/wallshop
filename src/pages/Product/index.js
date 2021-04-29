import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../assets';
import {Button, SearchBar} from '../../components';
import Toko from './TokoTab';
import Produk from './ProdukTab';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Product = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Button
          type="icon-only"
          icon="icon-back"
          onPress={() => navigation.navigate('Dashboard')}
        />
        <View style={styles.searchBarContainer}>
          <SearchBar style={styles.searchBar} width={280} />
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Produk" component={Produk} />
        <Tab.Screen name="Toko" component={Toko} />
      </Tab.Navigator>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  topContainer: {
    height: 80,
    backgroundColor: colors.red,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 27,
  },
  searchBarContainer: {
    paddingLeft: 15,
  },
});
