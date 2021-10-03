import React, { Component, useState, useRef } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker
} from "react-native";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("China");
  const [text, setText] = useState("");
  const myRef = useRef();
  const handleClick = (text) => {
    console.log(myRef.current.refs);
    setSelectedValue(text);
  };
  return (
    <View>
      <TextInput
        onChangeText={(text) => setText(text)}
        value={text}
        style={styles.inputPart}
        placeholder={"add location"}
      />
      <Button title="search location" onPress={() => handleClick(text)} />
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        ref={myRef}
      >
        <Picker.Item label="U.S.A" value="USA" />
        <Picker.Item label="China" value="China" />
        <Picker.Item label="Japan" value="Japan" />
        <Picker.Item label="India" value="India" />
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  inputPart: {
    height: 20,
    widht: 100 / 2
  }
});
export default App;
