import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView } from "react-native";
import axios from "axios";

const App = () => {
  const [data, setData] = useState('')
  
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
      axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=10`)
      .then(res => {
          setData(res.data)
          console.log(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }

  if(data === ''){
    return(
      <Text> LOADING </Text>
    )
  }
  return (
    <>
      <ScrollView style={{height: '100%'}}>
          {
            data.map((value, index) => {
              return(
                <View key={index} style={{height: 400}}>
                  <Image key={index.toString()} source={{uri: value.url}} style={{height: 400}} />
                </View>
              )
            })
          }
      </ScrollView>
    </>
  )
}

export default App;
