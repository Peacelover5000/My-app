import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>BMW Showroom</Text>
          </View>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('X')}>
            <Text style={styles.routeText}>List X series</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image
              source={require('../assets/BMW_logo.svg')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Numbers')}>
            <Text style={styles.routeText}>List Number Series</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image
              source={require('../assets/BMW_logo.svg')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('M')}>
            <Text style={styles.routeText}>Other Premiums</Text>
            <Text style={styles.bgDigit}>3</Text>
            <Image
              source={require('../assets/M.png')}
              style={styles.iconImage}></Image>
              </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
  },
  AndroidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height:550,
    width:350
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'cyan',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 60,
    paddingLeft: 10,
  },
  
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 100,
    right: 20,
    bottom: 60,
    zIndex: -1,
    color:'grey'
  },
  iconImage: {
    position: 'absolute',
    height: 60,
    width: 100,
    resizeMode: 'contain',
    right: 135,
    top: 5,
  },
});
