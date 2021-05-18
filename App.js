import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayText: '',
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    this.state.name === ''
      ? alert('Please Enter a word')
      : Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="#eefeee"
          centerComponent={{
            text: 'Text to Speech Convertor',
            style: { color: 'black', fontSize: 16 },
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text1) => {
            this.setState({
              name: text1,
            });
          }}
          value={this.state.text1}
        />
        <TouchableOpacity style={styles.goButton} onPress={this.speak}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold' },
  displayText: { textAlign: 'center', fontSize: 30 },
});
