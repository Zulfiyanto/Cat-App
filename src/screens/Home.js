import React, {useEffect, useState} from 'react';
import {Icon} from 'react-native-elements';
import {TextInput} from 'react-native';
import axios from 'axios';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';
import {styles} from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GETAPI, LOGOUT} from '../redux/type';
import {CommonActions} from '@react-navigation/native';

const Home = ({navigation}) => {
  // const [kucing, setDkucing] = useState([]);
  const dataUser = useSelector(state => state.Auth);
  const kucing = useSelector(state => state.Kucing);
  const dispatch = useDispatch();

  useEffect(() => {
    const getReadData = () => {
      axios
        .get(`https://api.thecatapi.com/v1/breeds?limit=10`)
        .then(res => {
          dispatch({type: GETAPI, payload: res.data});
          console.log(res.data.length);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getReadData();
  }, []);

  if (kucing.length === 0) {
    return <Text> LOADING </Text>;
  }

  const renderList = () => {
    return kucing.map((val, index) => {
      // console.log(val.image.url);
      return (
        <View style={styles.box} key={index}>
          <View>
            <Image
              style={{width: 120, height: 120, borderRadius: 10}}
              source={{
                uri: `${
                  val.image
                    ? val.image.url
                    : 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=727&q=80'
                }`,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#ECD089',
              height: 105,
              maxWidth: 190,
              width: 190,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              paddingLeft: 10,
            }}>
            {val.name.length > 15 ? (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#97741C',
                }}>
                {val.name}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '700',
                  color: '#97741C',
                }}>
                {val.name}
              </Text>
            )}

            <Text style={{fontSize: 13, color: '#97741C'}}>{val.origin}</Text>
            <Text style={{fontSize: 13, color: '#97741C', marginBottom: 3}}>
              Age : {val.life_span} Year
            </Text>
            <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
              $20,99
            </Text>
          </View>
        </View>
      );
    });
  };

  const OnLogOutpress = async () => {
    try {
      await AsyncStorage.removeItem('username');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
      dispatch({type: LOGOUT});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F73" barStyle="light-content" />
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 30,
          marginBottom: 20,
        }}>
        <View style={styles.userName}>
          <Image
            style={{height: 60, width: 60, borderRadius: 30, marginRight: 20}}
            source={{
              uri:
                'https://images.unsplash.com/photo-1508568230916-c2692a5d7b1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: '700', color: 'grey'}}>
              Welcome
            </Text>
            <Text style={{fontSize: 20, fontWeight: '700'}}>
              {dataUser.username}
            </Text>
          </View>
          <View style={{alignItems: 'flex-end', width: '45%', marginRight: 2}}>
            <Icon
              name="sign-out-alt"
              type="font-awesome-5"
              onPress={OnLogOutpress}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="search"
            type="font-awesome"
            color="#f50"
            size={35}
            style={{marginHorizontal: 13}}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="black"
            style={styles.TextInput}
          />
        </View>
      </View>

      {/* Slide Box */}
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',

            marginBottom: 0,
          }}>
          <View
            style={{
              backgroundColor: '#FF9F0D',
              borderRadius: 50,
              width: 140,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>🌭Fast Food</Text>
          </View>
          <View style={styles.boxSlide}>
            <Text style={{fontSize: 20, color: '#979797'}}>🍓 Fruits</Text>
          </View>
          <View style={styles.boxSlide}>
            <Text style={{fontSize: 20, color: '#979797'}}>🥦 Vegetables</Text>
          </View>
          <View style={styles.boxSlide}>
            <Text style={{fontSize: 20, color: '#979797'}}>🥩 Meat</Text>
          </View>
        </View>
      </ScrollView> */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Best Price</Text>
          <Text style={{color: '#92A0A8', fontSize: 16, fontWeight: '600'}}>
            Based on Recent Search
          </Text>
        </View>
        <View style={{alignItems: 'flex-end', width: '38%'}}>
          <Text
            style={{
              color: '#FE9575',
              fontSize: 15,
              fontWeight: '700',
            }}>
            See all
          </Text>
        </View>
      </View>

      <ScrollView>{renderList()}</ScrollView>
    </SafeAreaView>
  );
};

// const MapstatetoProps = ({Auth}) => {
//   return {
//     dataUser: Auth,
//   };
// };

// export default connect(MapstatetoProps)(Home);
export default Home;
