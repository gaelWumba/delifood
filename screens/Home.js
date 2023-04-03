import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';

import { YELP_API_KEY } from '@env'

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity ] = useState('Paris');

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const options = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      }
    }

    return fetch(yelpUrl, options)
      .then((res) => res.json())
      .then(json => setRestaurantData(json.businesses));
  }

  useEffect(() =>{
    getRestaurantsFromYelp();
  }, [city])
  
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 12}}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity}/>
        {/* <Categories /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}