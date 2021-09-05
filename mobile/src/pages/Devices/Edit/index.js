import React,{useEffect, useState} from 'react';
import {View, Text, TextInput, Picker, Button, TouchableOpacity, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useFormik } from 'formik';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather} from '@expo/vector-icons';

import api from '../../../services/api';

import styles from './styles';
import imgBg from '../../../assets/Fundo.jpeg';

export default function Devices(){
  const route = useRoute();
  let device = route.params.item;
  const [name, setName] = useState(device.dev_name);
  const [ip, setIp] = useState(device.dev_ip);
  const [port, setPort] = useState(device.dev_port);
  const [parts, setParts] = useState([]);
  const[part,setPart] = useState(device.dev_part);
  const [url, setUrl] = useState(device.dev_url);
  const [status, setStatus] = useState(device.dev_status);
  const navigation = useNavigation();
  

  const type = [
    {url: 'Lampada'},
    {url: 'Portão'},
    {url: 'Motor Portão'},
    {url: 'Ventilador'},
    {url: 'Ar-Condicionado'},
  ];

  async function loadParts(){
    
    const response = await api.get('/parts');
    setParts(response.data);
   
  }

  useEffect(() =>{
    loadParts();

  },[ ]);

  function goBack(){
    navigation.goBack();
  }

  async function editDevice(dev_id, dev_name, dev_ip, dev_port,dev_status=status, dev_url,  dev_part){
    
    
    const data = {
      dev_id,
      dev_name, 
      dev_ip,
      dev_port,
      dev_status, 
      dev_url,  
      dev_part
    };
    
    try{
      const response = await api.post('/updatedevice', data);
      
      alert(response.data);
      
      if(response.data == 'Alterado com sucesso!') 
          navigation.navigate('Home');   
    } catch(err) {
     
      alert ('Erro ao Alterar!!');
      console.log(err);
      alert(response.data);
    }
  }

  const {values, isSubmiting, setFieldValue, handleSubmit, errors} = useFormik({
    initialValues:{ 
      id:device.dev_id,
      name: name, 
      ip: ip, 
      port: port,
      device: device.dev_part,
      status:status,
      url: url
    },
    onSubmit: values =>{
      //enviar os valores a base de dados
      const {id, name, ip, port, device, status, url} = values;
      const response = editDevice(id, name, ip, port, status, url, device);
      console.log(response);
    },
  });
  console.log('Portax:'+ port);  
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

      <View style={styles.ContainergoBack}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={goBack}
          >
            <Feather size= {20} color="#FFF" name="arrow-left"/>  
          </TouchableOpacity>
        </View>

      <View style={styles.formContainer}>
      <View style={styles.formHeader}>
          <Text style={styles.formHeaderText}>Alterar Dispositivo {device.dev_id}</Text>
        </View>  
        <View style={styles.formControl}> 
          <TextInput 
                    onChangeText={text => setFieldValue('name', text, setName(text))}
                    placeholder="Nome"
                    value={name}
          />
        </View>
        <View style={styles.formControl}>
              <TextInput 
                  placeholder="IP"
                  onChangeText={text => setFieldValue('ip', text, setIp(text))}
                  value={ip}
              />
        </View>
        <View style={styles.formControl}>
              <TextInput 
                  placeholder="Porta"
                  onChangeText={text => setFieldValue('port', text, setPort(text))}
                  value={String(port)}
              />
        </View>
        <View style={styles.formControl}>
            <Picker
              style={styles.Picker}
              onValueChange={value => setFieldValue('device', value, setPart(value))}
              selectedValue={part}
            >
              <Picker.Item label='Escolha um Ambiente' value=""/>
              {parts.map(part =>(
                  <Picker.Item label={part.part_name} value={part.part_id} key={part.part_id}/>
              ))}
            </Picker>
          </View>
          <View style={styles.formControl}>  
            <Picker
                onValueChange={value => setFieldValue('url', value,setUrl(value))}
                selectedValue={url}   
              >
                <Picker.Item label='Escolha o tipo' value=""/>
                {type.map(item =>(
                    <Picker.Item label={item.url} value={item.url} key={item.url} />
                ))}
              </Picker>
          </View>
          <View style={styles.formControl}>
              <Button
              color="#47c3dd"
              onPress={handleSubmit}
              title="Confirmar"
          />
          </View>

      </View>

    </ImageBackground>
  );
}