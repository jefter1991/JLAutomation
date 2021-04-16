import React, {useState} from 'react';
import {View, Text, Image, TextInput, Button, Picker, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFormik } from 'formik';
import { Feather} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import api from '../../../services/api';
import styles from './styles';

import logoImg from '../../../assets/logo.png';


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

export default function EditParts(){
  const route = useRoute();
  let parts = route.params.item;
  const [status, setStatus] = useState(parts.part_status);
  const [url, setUrl] = useState(parts.part_url);
  const [name, setName] = useState(parts.part_name)
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

  async function editPart(part_id, part_name, part_url, part_status){
    
    const data = {
      part_id,
      part_name, 
      part_url, 
      part_status
    };

    try{
      
      const response = await api.post('/updateparts', data);
      console.log(response.data);
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
      id:parts.part_id,
      name: name, 
      status:status ,
      url:url
    },
    onSubmit: values =>{
      //enviar os valores a base de dados
      const {id, name, url, status} = values;
      const response = editPart(id, name, url, status);
      
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
    <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>
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
        <Text style={styles.formHeaderText}>Alteração Ambiente {parts.part_id}</Text>
          </View>  
          <View style={styles.formControl}>  
              {/*errors.name && <Text style={styles.error}>{errors.name}</Text>*/}{/*aqui ira mostrar se errros.name existir */}
              <TextInput 
                onChangeText={text => setFieldValue('name', text, setName(text))}
                placeholder="Nome"
                value={name}
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
                color="#008080"
                onPress={handleSubmit}
                title="Confirmar"
              />
              
          </View>
        </View>  
        </View>
      );
};

