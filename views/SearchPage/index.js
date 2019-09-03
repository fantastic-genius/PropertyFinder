import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, Button, ActivityIndicator, Image
} from 'react-native';
import houseImg from '../../Resources/house.png';

const SearchPage = () => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    e.persist()
    console.log('onInputChanged');
    setInputValue(e.nativeEvent.text);
    console.log(e.nativeEvent.text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Search for houses to buy</Text>
      <Text style={styles.description}>Search by place or postcode</Text>
      <View style={styles.flowRight}>
        <TextInput
          underlineColorAndroid='transparent'
          style={styles.searchInput}
          placeholder='Search via name or postcode'
          value={inputValue}
          onChange={onInputChange}
        />
        <Button
          onPress={() => {}}
          title='Go'
          color='#48BBEC'
        />
      </View>
      <Image source={houseImg} style={styles.image}/>
    </View>
  )
}

const styles = {
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  }, 
}

export default SearchPage;
