import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const Login = () => {
  return (
    <View style={styles.login}>
      <Image
        style={[styles.loginChild, styles.loginChildPosition]}
        resizeMode="cover"
        source={require('../assets/rectangle-98.png')}
      />
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={styles.loginToYour}>Login to your account</Text>
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>

      <Text style={[styles.forgotPassword, styles.createNowTypo]}>
        Forgot Password?
      </Text>
      <View style={styles.createNowParent}>
        <Text style={[styles.createNow, styles.createNowTypo]}>Create Now</Text>
        <Text
          style={[
            styles.dontHaveAccount,
            styles.createNowTypo,
          ]}>{`Don’t have account? `}</Text>
      </View>
      <View style={[styles.loginItem, styles.loginShadowBox]} />
      <View style={[styles.loginInner, styles.loginShadowBox]} />
      <View style={[styles.rectangleView, styles.loginShadowBox]} />
      <Text style={styles.login1}>Login</Text>
      <TextInput
        style={[styles.email1, styles.email1Typo]}
        placeholder="your e-mail"
      />
      <Text>Password</Text>
      <TextInput
        style={[styles.password1, styles.password1Position]}
        placeholder="your password please!"
      />
      <Image
        style={[styles.groupIcon, styles.password1Position]}
        resizeMode="cover"
        source={require('../assets/group-8.png')}
      />
      <Image
        style={[styles.loginChild1, styles.iconPosition]}
        resizeMode="cover"
        source={require('../assets/group-113.png')}
      />
      <Image
        style={[styles.facebook1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require('../assets/facebook-1.png')}
      />
      <Image
        style={[styles.instagramIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require('../assets/instagram.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginChildPosition: {
    left: 0,
    top: 0,
  },
  emailTypo: {
    color: Color.colorGray,
    fontSize: FontSize.size_lg,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  createNowTypo: {
    fontSize: FontSize.size_base,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  loginShadowBox: {
    height: 48,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    position: 'absolute',
  },
  email1Typo: {
    left: 48,
    fontSize: FontSize.size_base,
    color: Color.colorSilver,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  password1Position: {
    top: 472,
    position: 'absolute',
  },
  iconPosition: {
    height: 30,
    top: 702,
    position: 'absolute',
  },
  loginChild: {
    width: 375,
    position: 'absolute',
    height: 812,
  },
  welcome: {
    top: 251,
    left: 121,
    fontSize: 28,
    textAlign: 'center',
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  email: {
    top: 342,
    width: 56,
    left: 30,
    color: Color.colorGray,
    fontSize: FontSize.size_lg,
  },
  loginToYour: {
    top: 287,
    left: 81,
    color: Color.colorSilver,
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  password: {
    top: 429,
    left: 31,
    width: 150,
  },
  forgotPassword: {
    top: 515,
    left: 184,
    color: '#ea4335',
    width: 161,
  },
  createNow: {
    left: 178,
    color: '#d9d9d9',
    width: 100,
    top: 0,
    fontSize: FontSize.size_base,
  },
  dontHaveAccount: {
    color: '#616161',
    width: 175,
    left: 0,
    top: 0,
  },
  createNowParent: {
    top: 629,
    left: 49,
    width: 278,
    height: 24,
    position: 'absolute',
  },
  loginItem: {
    top: 375,
    width: 315,
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_7xs,
    height: 48,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    left: 30,
  },
  loginInner: {
    top: 460,
    width: 315,
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_7xs,
    height: 48,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    left: 30,
  },
  rectangleView: {
    top: 567,
    left: 40,
    borderRadius: 22,
    backgroundColor: '#29b6f6',
    width: 295,
    height: 48,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  login1: {
    top: 576,
    left: 159,
    width: 57,
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  email1: {
    top: 375,
    width: 100,
    position: 'absolute',
  },
  password1: {
    width: 88,
    left: 48,
    fontSize: FontSize.size_base,
    color: Color.colorSilver,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  groupIcon: {
    left: 303,
    width: 27,
    height: 24,
  },
  loginChild1: {
    left: 98,
    width: 32,
    height: 30,
    top: 702,
  },
  facebook1Icon: {
    left: 172,
    width: 31,
    height: 30,
    top: 702,
  },
  instagramIcon: {
    left: 245,
    width: 32,
    height: 30,
    top: 702,
  },
  login: {
    backgroundColor: '#000',
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 812,
  },
});

export default Login;
