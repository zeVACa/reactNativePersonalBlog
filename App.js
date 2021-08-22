import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
