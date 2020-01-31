import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Constants } from "expo";
import LoginScreen from "./components/Login";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC8yRaA5V-hrWjm7sl-8zSF-DJ2ZkE2OFU",
  authDomain: "exchange-experiences.firebaseapp.com",
  databaseURL: "https://exchange-experiences.firebaseio.com",
  projectId: "exchange-experiences",
  storageBucket: "exchange-experiences.appspot.com",
  messagingSenderId: "318757269452",
  appId: "1:318757269452:web:e42dfac2463d95448db769",
  measurementId: "G-4P8152PSVS"
};
firebase.initializeApp(firebaseConfig);


// const Tabs = createBottomTabNavigator({
//   Home: FeedScreen,
//   Create: CreateStack,
//   Profile: ProfileStack
// });

const Switch = createSwitchNavigator({
  Login: LoginScreen,
  //App: Tabs
});

const Apps = createAppContainer(Switch);

const AuthSwitch = createSwitchNavigator({
  // App: Tabs,
  Login: LoginScreen
});

const App = createAppContainer(AuthSwitch);
export default App;
