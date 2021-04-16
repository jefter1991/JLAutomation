import React,{useEffect, useState} from 'react';
import {View, Text, Image, TextInput, Picker, Button, TouchableOpacity, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { Feather} from '@expo/vector-icons';

import api from '../../../services/api';

import styles from './styles';
import imgBg from '../../../assets/Fundo.jpeg';

export default function Devices(){

  const [parts, setParts] = useState([]);
  const [url, setUrl] = useState([]);
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

  async function createDevice(dev_name, dev_ip, dev_status, dev_url,  dev_part){
    console.log('Status:'+ dev_status);
    const data = {
      dev_name, 
      dev_ip,
      dev_status:'0', 
      dev_url,  
      dev_part
    };
    
    try{
      const response = await api.post('/newdevice', data);
      
      alert(response.data);
      
      if(response.data == 'Cadastrado com sucesso!') 
          navigation.navigate('Home');   
    } catch(err) {
     
      alert ('Erro ao Cadastrar!!');
      console.log(err);
      alert(response.data);
    }
  }

  const {values, isSubmiting, setFieldValue, handleSubmit, errors} = useFormik({
    initialValues:{ 
      name: '', 
      ip: '', 
      device:'' ,
      status:'0',
      url: ''
    },
    onSubmit: values =>{
      //enviar os valores a base de dados
      const {name, ip, device, status, url} = values;
      const response = createDevice(name, ip,  status, url, device);
      console.log(response);
    },
  });
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
          <Text style={styles.formHeaderText}>Novo Dispositivo</Text>
        </View>  
        <View style={styles.formControl}> 
          <TextInput 
                    onChangeText={text => setFieldValue('name', text)}
                    placeholder="Nome"
          />
        </View>
        <View style={styles.formControl}>
              <TextInput 
                  placeholder="IP"
                  onChangeText={text => setFieldValue('ip', text)}
              />
        </View>
        <View style={styles.formControl}>
            <Picker
              style={styles.Picker}
              onValueChange={value => setFieldValue('device', value)}
              selectedValue={values.device}
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