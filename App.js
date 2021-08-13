import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location'
import { Alert, Text } from 'react-native';
import Loading from './screens/Loading';


export default function App() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {

      try {
        let {status} = await Location.requestForegroundPermissionsAsync();
      // let { status } = await Permissions.askAsync(Permissions.LOCATION);
      console.log(status);
      if(status !== 'granted') {
        console.log('Permission deneid');
        return;
      }

      let {coords} = await Location.getCurrentPositionAsync();
      setLoading(false);
      console.log(coords);

      //TODO - Send to API and Get Weather

      } catch (error) {
        Alert.alert("Can't find you", "So sad");
        console.log(error);
      }
      
    })();
  }, [])


  {return loading ? (<Text>Loading</Text>) : (<Loading />)}
}