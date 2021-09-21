import React,{useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, ImageBackground} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather} from '@expo/vector-icons';
import styles, {LoadingIcon} from './styles';
  
import imgBg from '../../assets/Fundo.jpeg';
import api from '../../services/api';

import iconLampApag from '../../assets/icons/lampApag.png';
import iconLampAcesa from '../../assets/icons/lampAcesa.png';
import iconVentilador from '../../assets/icons/ventilador.png';
import iconVentiladorLigado from '../../assets/icons/ventiladorLigado.png';
import iconAr from '../../assets/icons/ar-condicionado.png';
import iconArDesl from '../../assets/icons/ar-condicionadoDesl.png';
import iconPortao from '../../assets/icons/Portao.png';
import iconPortaoMot from '../../assets/icons/portaoMotor.png';
import iconPortaoMotAb from '../../assets/icons/portaoMotorAberto.png';

export default function DevicesParts(){

  const navigation = useNavigation();
  const [devices, setDevices] = useState([]);
  const [name_part, setName_part] = useState('');
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const id_part = route.params.id;
  const columns = 2;
  
  async function onSubmit(device){
    let status = device.dev_status;
    const dev_ip = device.dev_ip;
    let port = device.dev_port;
    
    if(device.dev_status == 1){
      status = 0;
      device.dev_status = 0;
    }  
     else{
      status = 1;
      device.dev_status=1;
    } 
    try{  
      const data = {dev_ip, status, port};
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
    //console.log(data);
    if (data.length > 0){
      while (lastRowElements !== columns) { 
        data.push({ 
          id: `empty-${lastRowElements}`,
          name: `empty-${lastRowElements}`,
          empty: true
        });
        lastRowElements += 1; 
      }
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
    setLoading(true);
    const response = await api.get(`devicesPart/${id_part}`);
    setDevices(response.data);
    setLoading(false);
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
      {loading && 
                  <LoadingIcon size='large' color="#47c3dd"/>
      }
      
      {devices.length > 0 && !loading ?
      <FlatList
            data={createRows(devices,columns)}
            keyExtractor={ (item => item.part_id == undefined?
              Math.floor(Math.random() * (1000 - 1)) + 1:
              item => item.part_id) }
            numColumns={columns}
            renderItem={({ item }) => {
              if (item.empty) {
                return <View style={[styles.item, styles.itemEmpty]} >
                          
                       </View>
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
                      (item.dev_url == 'Motor Portão' && item.dev_status == 0)?iconPortaoMot:
                      (item.dev_url == 'Motor Portão' && item.dev_status == 1)?iconPortaoMotAb:
                      (item.dev_url == 'Ventilador' && item.dev_status == 0)?iconVentilador:
                      (item.dev_url == 'Ventilador' && item.dev_status == 1)?iconVentiladorLigado:
                      (item.dev_url == 'Ar-Condicionado' && item.dev_status == 0)?iconArDesl:
                      (item.dev_url == 'Ar-Condicionado' && item.dev_status == 1)?iconAr:
                      iconPortao
                    }
                   style={styles.icons}/>
                  </TouchableOpacity> 
                
              );
            }}
      
      />
      :devices.length == 0 && !loading? <View style={styles.dataEmpty}><Text style={styles.TextdataEmpty}>Nenhum Dispositivo neste ambiente</Text></View>:<View></View>}
      </SafeAreaView>
          
    </View> 
  
  </ImageBackground >
  )
}