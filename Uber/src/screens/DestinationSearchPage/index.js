import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';

const DestinationSearchPage = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  return (

    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setFromText}
        value={fromText}
        placeholder="From"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setDestinationText}
        value={destinationText}
        placeholder="Where to"
      />
      <GooglePlacesAutocomplete
        placeholder="Search"
    
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyDNKqnPV7sD8FpHGdTLi-yTNeps_4HibQo',
          language: 'en',
        }}
      />
    </View>
  );
};

export default DestinationSearchPage;
