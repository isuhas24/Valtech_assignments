import { useDeviceOrientation } from "@react-native-community/hooks";
import { useState } from "react";

import { SafeAreaView,Platform, StatusBar, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

function App(): React.JSX.Element {

  const styles = StyleSheet.create({
    box : {
      width : "25%",
      height : 300,
      backgroundColor : "red"
    }
  })


  return <SafeAreaView>
          <ScrollView>
            <View style={useDeviceOrientation() === "portrait" ? styles.box : {...styles.box, width: "75%", backgroundColor: "yellow"}}></View>
          </ScrollView>
         </SafeAreaView>;
}
 

export default App;

