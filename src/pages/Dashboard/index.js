import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  colors,
  fonts,
  IconArrowRight,
  IconCompass,
  IconPin,
  IMGHandsanitizer,
  IMGMask,
  IMGSambalRoa,
  IMGSneakers,
  IMGTarantula,
} from '../../assets';
import {Carousel, SearchBar, RoundButton} from '../../components';

const OpenAllButton = () => {
  return (
    <TouchableOpacity style={styles.lihatSemuaButtonContainer}>
      <Text>Lihat Semua</Text>
      <IconArrowRight color={colors.primaryBlack} />
    </TouchableOpacity>
  );
};

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <SearchBar type="dashboard" />
        <View style={styles.carouselContainer}>
          <Carousel />
        </View>
      </View>

      <View style={styles.promoTitleContainer}>
        <IconPin style={styles.iconPin} />
        <Text style={styles.titleTertiary}>Promo di Sekitar Anda</Text>
        <OpenAllButton />
      </View>

      <View style={styles.promosContainer}>
        <RoundButton type="png" image={IMGMask} title="Masker" />
        <RoundButton
          type="png"
          image={IMGHandsanitizer}
          title="Handsanitizer"
        />
        <RoundButton type="png" image={IMGSambalRoa} title="Sambal Roa" />
        <RoundButton type="png" image={IMGSneakers} title="Sneakers" />
        <RoundButton type="png" image={IMGTarantula} title="Tarantula" />
      </View>

      <View style={styles.shoppingCategoryContainer}>
        <Text style={styles.shoppingCategoryTitle}>KATEGORI BELANJA</Text>
        <TouchableOpacity style={styles.shoppingCategoryButton}>
          <IconCompass />
          <Text style={styles.shoppingCategoryButtonText}>
            Eksplorasi sekitar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.openAllButtonContainer}>
        <OpenAllButton style={styles.openAllButton} />
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.lineCategoryContainer}>
          <RoundButton
            type="svg"
            image="icon-electronic"
            title="Elektronik"
            onClick={() => navigation.navigate('Product')}
          />
          <RoundButton type="svg" image="icon-furniture" title="Furnitur" />
          <RoundButton type="svg" image="icon-house" title="Bangunan" />
          <RoundButton type="svg" image="icon-ball" title="Olahraga" />
        </View>
        <View style={styles.lineCategoryContainer}>
          <RoundButton type="svg" image="icon-medicine" title="Kesehatan" />
          <RoundButton type="svg" image="icon-chef-hat" title="Dapur" />
          <RoundButton type="svg" image="icon-fruits" title="Bahan Pangan" />
          <RoundButton type="svg" image="icon-dog" title="Peliharaan" />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContainer: {
    height: 187,
    backgroundColor: colors.red,
    width: '100%',
    alignItems: 'center',
    paddingTop: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBoxContainer: {
    backgroundColor: 'white',
    width: 300,
    height: 46,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 14,
  },
  searchBoxTextContainer: {
    width: 192,
  },

  carouselContainer: {
    // marginTop: 25,
    top: 25,
  },

  promoTitleContainer: {
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },
  lihatSemuaButtonContainer: {
    flexDirection: 'row',
    width: 110,
    justifyContent: 'space-between',
    right: 5,
  },
  iconPin: {
    bottom: 5,
  },
  titleTertiary: {
    right: 30,
    fontFamily: fonts.Roboto.bold,
    fontSize: 14,
  },

  roundButton: {
    alignItems: 'center',
  },
  roundButtonTitle: {
    fontSize: 12,
    width: 60,
    textAlign: 'center',
  },
  roundButtonImage: {
    borderRadius: 25,
    elevation: 3,
  },
  promosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    marginTop: 15,
  },

  shoppingCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    marginTop: 15,
  },
  shoppingCategoryTitle: {
    fontFamily: fonts.Roboto.bold,
    fontSize: 18,
  },
  shoppingCategoryButton: {
    backgroundColor: colors.green,
    flexDirection: 'row',
    paddingHorizontal: 17,
    paddingVertical: 7,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shoppingCategoryButtonText: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 8,
    bottom: 1,
  },

  openAllButtonContainer: {
    alignItems: 'flex-end',
    paddingRight: 26,
    marginTop: 10,
    marginBottom: 10,
  },

  lineCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 26,
    paddingVertical: 7,
  },
});
