import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image, Modal} from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default function Main({navigation}) {
  const [news,setNews] = useState([
    {name: 'Coogle', anons: 'Coogle!!!', full: 'Çoogle is coll', key: '1', img: 'https://reactnative.dev/img/showcase/facebook.webp'},
    {name: 'Apple', anons: 'Apple!!!', full: 'Apple is coll',  key: '2', img: 'https://reactnative.dev/img/showcase/pinterest.webp'},
    {name: 'FaceBook', anons: 'FaceBook!!!', full: 'FaceBook is coll',  key: '3', img: 'https://reactnative.dev/img/showcase/facebook.webp'}
  ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
      setNews ((list) => {
        return [
          article,
          ...list
        ]
      });
      setModalWindow (false);
    }

    return (
        <View style={gStyle.main}>
          <Modal visible={modalWindow}>
            <View style={gStyle.main}>
            <Ionicons name="close-circle" size={34} color="red" style={styles.iconClouse} onPress={() => setModalWindow(false)}/>
            <Text style={styles.title}>Форма добавления статей</Text>
            <Form addArticle = {addArticle}/>
            </View>
          </Modal>
        <Ionicons name="add-circle-sharp" size={34} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
        <Text style={[gStyle.title, styles.header]}> Главная страница</Text>
        
      <FlatList data = {news} renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Fullinfo', item)}>
            <Image style={styles.image} source={{uri: item.img}}/>
            <Text style = {styles.title}>{item.name}</Text>
            <Text style = {styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}/>
        </View>
      );
    }

    const styles = StyleSheet.create({
      iconClouse: {
        textAlign: 'center'
      },
      iconAdd: {
        textAlign: 'center',
        marginBottom: 15
      },
      image: {
        width: 100,
        height: 100,
      },
      item: {
        width: '100%',
        marginBottom: 30
      },
      header:{
        marginBottom: 10
      },
      title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
      },
      anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
      }

    });
    