import React,{useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, ImageBackground} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather} from '@expo/vector-icons';
import styles from './styles';
  
import imgBg from '../../assets/Fundo.jpeg';
import api from '../../services/api';

import iconLampApag from '../../assets/icons/lampApag.png';
import iconLampAcesa from '../../assets/icons/lampAcesa.png';
import iconVentilador from '../../assets/icons/ventilador.png';
import iconAr from '../../assets/icons/ar-condicionado.png';
import iconPortao from '../../assets/icons/Portao.png';
import iconPortaoMot from '../../assets/icons/portaoMotor.png';

export default function DevicesParts(){

  const navigation = useNavigation();
  const [devices, setDevices] = useState([]);
  const [name_part, setName_part] = useState('');
  const route = useRoute();
  const id_part = route.params.id;
  const columns = 2;

  async function onSubmit(device){
    let status = device.dev_status;
    const dev_ip = device.dev_ip;
    
    if(device.dev_status == 1){
       status = 0;
      device.dev_status = 0;
    }  
     else{
      status = 1;
      device.dev_status=1;
    } 
    try{  
      const data = {dev_ip, status};
      let response = await api.post('/inverterRelay', data);
      console.log(response.data);

      if(response.data == undefined){
        alert("IP não encontrado");
      }else{
         response = await api.post('/updatedevice', device, {
          headers:{
            dev_id: device.dev_id
          }
         });
         loadDevices();
      }
    }catch(err){
        alert("Erro ao inverter relé!!!")
    }
  }

  function createRows(data, columns) {
    
    const rows = Math.floor(data.length / columns); 
    let lastRowElements = data.length - rows * columns; 
    while (lastRowElements !== columns) { 
      data.push({ 
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1; 
    }
    return data; 
  }
  
  async function partName(){ 
    const response = await api.get(`parts/`);
    const parts = response.data;
    
    const part = parts.filter(p => (p.part_id == id_part));
    setName_part(part[0].part_name);
  }

  async function loadDevices(){ 
    const response = await api.get(`devicesPart/${id_part}`);
    setDevices(response.data);
  } 
  
  function goBack(){
    navigation.goBack();
  }

  useEffect( ( ) =>{
    loadDevices();
    partName() ;
  },[])

  return (
    <ImageBackground 
      style={styles.container}
      source={imgBg}
    
    >
    
    <View style={styles.header}>
        <Text style={styles.headerTextJL}>
          JL
        </Text>  
        <Text style={styles.headerText}>
           Automação Residencial
        </Text>
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
            Dispositivos {name_part}
      </Text>
   </View>
  
   <View style={styles.containtDevices}>
      
      <SafeAreaView>          
      <FlatList
            data={createRows(devices,columns)}
            keyExtractor={ (item => item.part_id == undefined?
              Math.floor(Math.random() * (1000 - 1)) + 1:
              item => item.part_id) }
            numColumns={columns}
            renderItem={({ item }) => {
              if (item.empty) {
                return <View style={[styles.item, styles.itemEmpty]} />;
              }
              return (
                
                   <TouchableOpacity 
                      style={styles.item}
                      onPress={() =>onSubmit(item)}
                    > 
                   <Text style={styles.text}>{item.dev_name}</Text>
                   <Image 
                    source={
                      (item.dev_url == 'Lampada' && item.dev_status == 0)?iconLampApag:
                      (item.dev_url == 'Lampada' && item.dev_status == 1)?iconLampAcesa:
                      item.dev_url == 'Ventilador'?iconVentilador:
                      item.dev_url == 'Ar-Condicionado'?iconAr:
                      item.dev_url == 'Portão'?iconPortao:
                      iconPortaoMot
                    }
                   style={styles.icons}/>
                  </TouchableOpacity> 
                
              );
            }}
      />
      </SafeAreaView>
          
    </View> 
  
  </ImageBackground >
  )
}