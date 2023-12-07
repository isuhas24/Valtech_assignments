import { useState } from "react";
import { Alert, Button, Dimensions, ImageBackground, ScrollView, StyleSheet, Switch, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
function App(): React.JSX.Element {

  const styles = StyleSheet.create({
    box : {
      width : "50%",
      height : 200,
      backgroundColor : "grey",
      marginBottom : 10
    },
    firstbox : {
      marginTop : 50
    },
  })

  let [width, setWidth] = useState({width : "50%"})
  return (
    <View>
      <View style={[styles.box, styles.firstbox]}></View>
      <TouchableWithoutFeedback onPress={() => setWidth({width : "100%"}) }>
        <View style={{...styles.box, backgroundColor : "cyan", width: width.width}} ></View>
      </TouchableWithoutFeedback>
     
      <View style={{...styles.box, backgroundColor : "yellow"}}></View>
      <View style={{...styles.box, backgroundColor : "black"}}></View>
    </View>
  );
}
 

export default App;
