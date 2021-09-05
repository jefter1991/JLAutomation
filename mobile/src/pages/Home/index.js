import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

import ImgHouse from '../../assets/Home2.png';
import imgBg from '../../assets/Fundo.jpeg';

export default function Home(){
  
  const navigation = useNavigation();

  function newDevice(){
    navigation.navigate('CreateDevices') ;
  }

  function listDevices(){
    navigation.navigate('ListDevices') ;
  }
  
  function newPart(){
    navigation.navigate('CreateParts') ;
  }

  function listPart(){
    navigation.navigate('ListParts') ;
  }
  
  function MyHome(){
    navigation.navigate('MyHouse') ;
  }
  
  return (
    <ImageBackground 
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
        
        <Animatable.View
            style={styles.buttonNew}
            animation="bounceInLeft"
            useNativeDriver
            duration={1000}
          >
        <TouchableOpacity 
            style={styles.buttonNewPart}
            onPress={newPart}
          >
              <Text style={styles.buttonText}> + Novo Ambiente</Text>
              <Feather name="home" size={16} color="#FFF"/>
          </TouchableOpacity>        
          <TouchableOpacity 
            style={styles.buttonNewDevice}
            onPress={newDevice}
          >
              <Text style={styles.buttonText}> + Novo Dispositivo</Text>
              <Feather name="wifi" size={16} color="#FFF"/>
          </TouchableOpacity>
        </Animatable.View>
        
        
        <Animatable.View
            style={styles.buttonNew}
            animation="bounceInLeft"
            useNativeDriver
            duration={1000}
          >
          <TouchableOpacity 
            style={styles.buttonNewPart}
            onPress={listPart}
          >
              <Feather name="list" size={16} color="#FFF"/>
              <Text style={styles.buttonText}> Listar Ambientes</Text>
              
          </TouchableOpacity>        
          <TouchableOpacity 
            style={styles.buttonNewDevice}
            onPress={listDevices}
          >
              <Feather name="list" size={16} color="#FFF"/>
              <Text style={styles.buttonText}> Listar Dispositivos</Text>
          </TouchableOpacity>
        </Animatable.View>

      <Animatable.View
        animation="bounceInUp"
        useNativeDriver
        duration={1000}
      >
      <TouchableOpacity 
          style={styles.buttonMyHome}
          onPress={MyHome}
        >
          <Animatable.Text 
            style={styles.buttonMyHomeTex}
            animation="pulse"
            useNativeDriver
            iterationCount={3}
          > 
            
          </Animatable.Text>
          <Animatable.Image 
            source={ImgHouse} 
            animation="pulse"
            useNativeDriver
            iterationCount={3}
            style={styles.stimgHouse}
          />
        <Text style={styles.buttonMyHomeTex}>Minha Casa</Text>
        </TouchableOpacity>
        
        </Animatable.View> 
        
    </ImageBackground>
  );
}