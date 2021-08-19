import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, IMGDashboard} from '../../../assets';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import {telkomsel} from '../../../assets/videos';
import WebView from 'react-native-webview';

const Carousel = ({image1, image2, image3, type}) => {
  const video = Video;

  // const HTMLimage = `<!-- PubMatic ad tag (Javascript) : DigiHackAction_Mobile_300x250 | DigiHackAction Mobile | 300 x 250 Sidekick -->
  // <script type="text/javascript">
  // var pubId=157566;
  // var siteId=851483;
  // var kadId=3932574;
  // var kadwidth=300;
  // var kadheight=250;
  // var kadschain="SUPPLYCHAIN_GOES_HERE";
  // var kadUsPrivacy=""; <!-- Insert user CCPA consent string here for CCPA compliant inventory -->
  // var kadtype=1;
  // var kadGdpr="0"; <!-- set to 1 if inventory is GDPR compliant -->
  // var kadGdprConsent=""; <!-- Insert user GDPR consent string here for GDPR compliant inventory -->
  // var kadexpdir = '1,2,3,4,5';
  // var kadbattr = '8,9,10,11,14';
  // var kadifb = 'Dc';
  // var kadpageurl= "%%PATTERN:url%%";
  // </script>
  // <script type="text/javascript" src="https://ads.pubmatic.com/AdServer/js/showad.js"></script>`;
  // const HTMLvideo =
  //   'https://vid.pubmatic.com/AdServer/AdServerServlet?adtype=13&pubId=157566&siteId=851483&adId=3940492&vadFmt=2&vminl=5&vmaxl=300&vh=PLAYER_HEIGHT&vw=PLAYER_WIDTH&placement=1&vtype=1&vpos=1&vplay=2&vskip=0&vcom=0&vfmt=1+5+7&sec=1&gdpr=&gdpr_consent=&schain=SUPPLYCHAIN_GOES_HERE&us_privacy=&kadpageurl=INSERT_ENCODED_PAGEURL_HERE';
  return (
    <Swiper
      style={styles.carouselWrapper}
      // autoplay={true}
      dotStyle={{
        backgroundColor: colors.green,
        opacity: 0.5,
      }}
      paginationStyle={{bottom: -15}}
      activeDotStyle={{backgroundColor: colors.green}}>
      {/* <View style={styles.slideVideo}>
        <View style={styles.videoStyling}>
          <Video
            source={require('../../../assets/videos/telkomsel.mp4')}
            style={styles.video}
            repeat={true}
            muted={true}
          />
        </View>
      </View> */}
      {type === 'dashboard' ? (
        <View style={styles.slide1}>
          <View style={styles.slideWrapper}>
            <Image source={image1} style={styles.carouselPicture} />
          </View>
        </View>
      ) : (
        <View style={styles.slideVideo}>
          <View style={styles.videoStyling}>
            <Video
              source={require('../../../assets/videos/telkomsel.mp4')}
              style={styles.video}
              repeat={true}
              muted={true}
            />
          </View>
        </View>
      )}
      {/* {type === 'explore' ? (
        <View style={styles.webView}>
          <WebView source={{html: HTMLimage}} />
        </View>
      ) : (
        <View style={styles.slide1}>
          <View style={styles.slideWrapper}>
            <Image source={image2} style={styles.carouselPicture} />
          </View>
        </View>
      )} */}
      <View style={styles.slide1}>
        <View style={styles.slideWrapper}>
          <Image source={image2} style={styles.carouselPicture} />
        </View>
      </View>
      {/* {type === 'explore' ? (
        <View style={styles.webView}>
          <Video source={{uri: HTMLvideo}} />
        </View>
      ) : (
        <View style={styles.slide1}>
          <View style={styles.slideWrapper}>
            <Image source={image2} style={styles.carouselPicture} />
          </View>
        </View>
      )} */}
      {/* <View style={styles.slide1}>
        <View style={styles.slideWrapper}>
          <Image source={image2} style={styles.carouselPicture} />
        </View>
      </View> */}
      <View style={styles.slide1}>
        <View style={styles.slideWrapper}>
          <Image source={image3} style={styles.carouselPicture} />
        </View>
      </View>
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselWrapper: {
    height: 200,
  },
  slideVideo: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    // borderRadius: 20,
  },
  videoStyling: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  slide1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  carouselPicture: {
    // backgroundColor: 'yellow',
    height: '100%',
    // width: '100%',
    // borderRadius: 0,
    resizeMode: 'contain',
  },
  video: {
    width: '100%',
    height: '100%',
    // borderRadius: ,
  },
  slideWrapper: {
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  webView: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'yellow',
  },
});
