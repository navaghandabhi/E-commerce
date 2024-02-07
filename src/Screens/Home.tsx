import React from 'react';
import {
  StatusBar,
  StyleSheet, Text, View,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

function Home(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <Appbar.Header>
        <Appbar.Action icon={'location'}></Appbar.Action>
        <Appbar.Content title="Ahmedabad India" titleStyle={styles.appBarTitleStyle} ></Appbar.Content>
        <Appbar.Action icon={'cart'}></Appbar.Action>
      </Appbar.Header>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarTitleStyle: {
    textAlign: "center"
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium',
    marginBottom: 16
  },
  container: {
    flex: 1,
  }
});

export default Home;
