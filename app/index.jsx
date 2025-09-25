import { Text, View, Button, TextInput} from "react-native";
import { useState } from "react";

export default function Index() {

  const [value, setValue] = useState("")
  const [buttonText, setButtonText] = useState("")

  const handleButton =() => {
    setButtonText(value)
  }

  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text>{buttonText}</Text>
      <Button onPress={handleButton} title="Damachiiree"></Button>
      <TextInput onChangeText={setValue} style={{
        width:200,
        height:60,

        backgroundColor:"grey",
        borderWidth:1
        }}/>
    </View>
  );
}
