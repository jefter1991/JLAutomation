import React,{useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

import imgBg from '../../../assets/Fundo.jpeg';

import api from '../../../services/api';

export default function ListParts(){

  const [parts, setParts] = useState([]);
  const navigation = useNavigation();

  function navigateToEditPart(item){
    navigation.navigate('EditParts',{item});
  }

  function goBack(){
    navigation.goBack();
  }

  async function loadParts(){
    const response = await api.get('/parts');
    if(response.data){
      setParts(response.data);
    }  
  }

  useEffect(() =>{
    loadParts();
  },[ ]);

  return(

    <ImageBackground style={styles.container}
      style={styles.container}
      source={imgBg}
    >  
    <View style={styles.header}>
          <Animatable.Text 
              style={styles.headerTextJL}
              animation="fadeIn"
              useNativeDriver
              duration={3000}
          >
           JL
        </Animatable.Text>
        <Animatable.Text 
              style={styles.headerText}
              animation="fadeIn"
              useNativeDriver
              duration={3000}
          >
           Automação Residencial
        </Animatable.Text>
    </View>
   
    <View style={styles.ContainergoBack}>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={goBack}
      >
        <Feather size= {20} color="#FFF" name="arrow-left"/>  
      </TouchableOpacity>
    </View>

    <View style={styles.headerParts}>
    <Text style={styles.headerPartsText}>
          Ambientes
    </Text>
    
    </View>
    <SafeAreaView 
      style={styles.containerList}>
      <FlatList
        data={parts}
        renderItem={({ item }) => 
        <View style={styles.listItem}>
          <Text style={styles.listItemText}> {item.part_name}</Text>
          <TouchableOpacity
            onPress={()=>navigateToEditPart(item)}
          >
            <Feather size={25} name="edit" color="#FFF"/>
          </TouchableOpacity>
          </View>
        }
        keyExtractor={item => item.part_id}
      />
    </SafeAreaView>

    </ImageBackground>

)};