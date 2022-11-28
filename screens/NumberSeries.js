import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import axios from 'axios';

export default class NumberSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Number series</Text>
          </View>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Meteors')}>
            <Text style={styles.routeText}>2 series</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image
              source={require('../assets/X3.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Meteors')}>
            <Text style={styles.routeText}>3 series</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image
              source={require('../assets/X4.png')}
              style={styles.iconImage}></Image>
              </TouchableOpacity>
              <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Meteors')}>
            <Text style={styles.routeText}>5 series</Text>
            <Text style={styles.bgDigit}>3</Text>
            <Image
              source={require('../assets/X5.png')}
              style={styles.iconImage}></Image>
              </TouchableOpacity>
              <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Meteors')}>
            <Text style={styles.routeText}>6 series</Text>
            <Text style={styles.bgDigit}>4</Text>
            <Image
              source={require('../assets/X6.png')}
              style={styles.iconImage}></Image>
              </TouchableOpacity>
              <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Meteors')}>
            <Text style={styles.routeText}>7 series</Text>
            <Text style={styles.bgDigit}>5</Text>
            <Image
              source={require('../assets/X7.png')}
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
    height: 1000,
    width: 350
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
    color: 'White',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 60,
    paddingLeft: 20,
  },
  
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
    color:'grey',
  },
  iconImage: {
    position: 'absolute',
    height: 100,
    width: 100,
    resizeMode: 'contain',
    right: 150,
    top: -30,
  },
});

