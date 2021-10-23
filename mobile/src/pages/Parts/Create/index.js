import React, {useState} from 'react';
import {View, Text, Image, TextInput, Button, Picker, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { Feather} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import api from '../../../services/api';
import styles from './styles';
import gStyle from '../../../generalStyle';


function validateIP(id) {
  var RegExPattern = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    
  if(id == ""){
    return false;   
  }

  if( (!(id.match(RegExPattern)) && (id!="")) || id=='0.0.0.0' || id=='255.255.255.255' ) {
    return false;
  }
  return true;
}

export default function CreateParts(){
  const [status, setStatus] = useState([]);
  const [url, setUrl] = useState([]);
  const navigation = useNavigation();
  
  const data = [
    {status:'A'},
    {status:'I'}
  ];
  
   const type = [
     {url: 'sala'},
     {url: 'cozinha'},
     {url: 'banheiro'},
     {url: 'quarto'},
     {url: 'garagem'},
     {url: 'quintal'},
     {url: 'lavanderia'},
   ];

  function goBack(){
    navigation.goBack();
  }

  async function createPart(part_name, part_url, part_status){
    
    const data = {
      part_name, 
      part_url, 
      part_status
    };

    try{
      const response = await api.post('/newparts', data);
      console.log(response.data);
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
      status:'' ,
      url:''
    },
    onSubmit: values =>{
      //enviar os valores a base de dados
      const {name, url, status} = values;
      const response = createPart(name, url, status);
      console.log(response);
    },
 /*   validate: values => {
      const errors = {};
      if(values.name == "")
          errors.name = "Nome não pode ser vazio!"
      else if(!validateIP(values.ip)) 
          errors.ip = "IP inválido"
      else if(values.device == "")
          errors.device = "Escolha um dispositivo"
      else 
          errors ={};

      return errors;
      
    }*/
    
  });

  return (
    <ImageBackground 
        style={styles.container}
        source={gStyle.imgBg}
    >
        <View style={styles.header}>
        <Animatable.Text 
              style={styles.headerText}
              animation="fadeIn"
              useNativeDriver
              duration={2000}
          >
            JL
          </Animatable.Text>
          <Animatable.Text 
              style={styles.headerText}
              animation="fadeIn"
              useNativeDriver
              duration={2000}
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
            <Text style={styles.formHeaderText}>Novo Ambiente</Text>
          </View>  
          <View style={styles.formControl}>  
              {/*errors.name && <Text style={styles.error}>{errors.name}</Text>*/}{/*aqui ira mostrar se errros.name existir */}
              <TextInput 
                onChangeText={text => setFieldValue('name', text)}
                placeholder="Nome"
              />
          </View>
          <View style={styles.formControl}>  
            <Picker
                style={styles.Picker}
                onValueChange={value => setFieldValue('status', value,setStatus(value))}
                selectedValue={status}   
              >
                <Picker.Item label='Status' value=""/>
                {data.map(item =>(
                    <Picker.Item label={item.status=='A'?'Ativo':'Inativo'} value={item.status} key={item.status}/>
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
};

