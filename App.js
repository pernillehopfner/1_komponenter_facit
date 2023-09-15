import { StyleSheet, View } from 'react-native';

/*Mine brugte komponenter*/
import FirstComponent from "./components/FirstComponent";
import PropsComponent from "./components/PropsComponent";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";
import AssetComponent from "./components/AssetComponent";

/*Mit billede*/
import FirstImage from "./assets/favicon.png"


export default function App() {
  return (
    <View style={styles.container}>
      {/*Komponent uden nogen props*/}
      <FirstComponent/>

      {/*Komponent med Props*/}
      <PropsComponent name={"Pernille Høpfner"}/>

      {/* Dynamisk farveknap */}
      <ButtonComponent/>

      {/*Input text felt*/}
      <InputComponent/>

      {/*Billede component med en prop kaldt url, som bliver passet til min Asset Compoennt*/}
      <AssetComponent url={FirstImage}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
