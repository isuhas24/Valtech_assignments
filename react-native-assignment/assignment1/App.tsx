import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { Header } from "./components/header";
import { Footer } from "./components/footer";




function App(): JSX.Element {
  const heroesList = [
    {title : "ironman", poster : require("./assets/images/ironman.jpg")},
    {title : "batman", poster : require("./assets/images/batman.jpg")},
    {title : "superman", poster : require("./assets/images/superman.jpg")},
    {title : "antman", poster : require("./assets/images/antman.jpg")},
    {title : "spiderman", poster : require("./assets/images/spiderman.jpg")},
    {title : "hulk", poster : require("./assets/images/hulk.jpg")},
    {title : "wonder woman", poster : require("./assets/images/wonderwoman.jpg")},
  ]

  return (
    <ScrollView horizontal={true}>
      {heroesList.map((val, idx) => (
        <View key={idx}>
          <Text>{val.title}</Text>
           <Image source={val.poster}/>
        </View>
      )) }
    </ScrollView>
  )
}


export default App;
