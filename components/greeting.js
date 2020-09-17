import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Greeting extends Component {
  constructor(props) {
    super();
    this.state = { name: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 30, borderColor: 'gray', borderWidth: 1 }}
          placeholder='Enter your name...'
          onChangeText={(name) => this.setState({ name })}
        />
        <Text style={{ marginTop: 10 }}>
          Welcome to this CI/CD React Native course, {this.state.name} !
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 16,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
