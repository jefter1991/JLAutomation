import React,{useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, Alert, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import styles, {LoadingIcon} from './styles';

import imgBg from '../../../assets/Fundo.jpeg';
import api from '../../../services/api';

export default function ListDevices(){

  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const buttonAlert = (dev_name, part_name, dev_id) =>
  Alert.alert(
    "Excluindo Registro",
    "Tem certeza que deseja deletar "+dev_name+" - "+part_name+"?",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Deletar", onPress: () => deleteDevice(dev_id)}
    ],
    { cancelable: false }
  );

  function navigateToEditDevices(item){
    navigation.navigate('EditDevices',{item});
  }

  function goBack(){
    navigation.goBack();
  }

  async function loadDevices(){
    setLoading(true);
    const response = await api.get('/devices');
    if(response.data){
      setDevices(response.data);
    }  
    setLoading(false);
  }

  useEffect(() =>{
    loadDevices();
  },[ ]);

  

  async function deleteDevice(dev_id){

    const response = await api.delete(`/devices/${dev_id}`);
    alert("Excluído com sucesso!");
    loadDevices();
    
  }

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

    <View style={styles.headerDevices}>
    <Text style={styles.headerDevicesText}>
          Dispositivos
    </Text>
    
    </View>
    <SafeAreaView 
      style={styles.containerList}>
     {loading && 
        <LoadingIcon size='large' color="#47c3dd"/>
      }   
      <FlatList
        data={devices}
        renderItem={({ item }) => 
        <View style={styles.listItem}>
          <View style={styles.listItemPart}>
            <Text style={styles.listItemText}> {item.dev_name}</Text>
            <TouchableOpacity
              onPress={()=>navigateToEditDevices(item)}
            >
              <Feather size={25} name="edit" color="#FFF"/>
            </TouchableOpacity>
          </View>
          <View style={styles.listItemPart}>
            <Text style={styles.listItemPartText}> {item.part_name} - {item.dev_ip}</Text>
            <TouchableOpacity
              onPress={() => buttonAlert(item.dev_name, item.part_name, item.dev_id)}
            >
              <Feather size={25} name="trash-2" color="#FFF"/>
            </TouchableOpacity>
          </View>
        </View>
      }
        keyExtractor={item => item.dev_id}
      />
    </SafeAreaView>

    </ImageBackground>

)};