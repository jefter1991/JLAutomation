import React,{useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { Feather} from '@expo/vector-icons';
import styles, {LoadingIcon} from './styles';

import gStyle from '../../generalStyle';


import iconQuarto from '../../assets/icons/quarto.png';
import iconSala from '../../assets/icons/sala.png';
import iconCozinha from '../../assets/icons/cozinha.png';
import iconBan from '../../assets/icons/banheiro.png';
import iconQuintal from '../../assets/icons/quintal.png';
import iconGarage from '../../assets/icons/garagem.png';
import iconLava from '../../assets/icons/lavanderia.png';

import api from '../../services/api';

export default function MyHouse(){
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const columns = 2;

  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns); // [A] Calculando o número base de linhas que teremos
    let lastRowElements = data.length - rows * columns; // [B] Calculando a quantidade de itens que irá sobrar na última linha
    while (lastRowElements !== columns) { // [C] Enquanto o número de itens na última linha não for igual ao número desejado de colunas
      data.push({ // [D]   Iremos adicionar elementos vazios no array disponibilizado
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1; // [E]  Incrementamos o contador
    }
    return data; // [F]  Retornamos o novo array preenchido
  }

  function goDevice(id){
      navigation.navigate('DevicesParts', {id});
  }

  function goBack(){
    navigation.goBack();
  }

  async function loadParts(){
    setLoading(true);
    const response = await api.get('/partsA');
    setParts(response.data);
    setLoading(false);
  }

  useEffect(() =>{
    loadParts();
  },[ ]);

 
return(  
  
  <ImageBackground 
      style={styles.container}
      source={gStyle.imgBg}
    
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
            Ambientes da Casa
      </Text>
    </View>

  <Animatable.View
      style={styles.containtParts}
      animation="bounceInUp"
      useNativeDriver
      duration={1000}
  >
      <SafeAreaView>
      {loading && 
                  <LoadingIcon size='large' color="#47c3dd"/>
      }
      <FlatList
            data={createRows(parts,columns)}
            keyExtractor={item => item.part_id}
            numColumns={columns}
            renderItem={({ item }) => {
              if (item.empty) {
                return <View style={[styles.item, styles.itemEmpty]}/>;
              }
              return (
                
                   <TouchableOpacity 
                      style={styles.item}
                      onPress={() =>goDevice(item.part_id)}
                    > 
                   <Text style={styles.text}>{item.part_name}</Text>
                   <Image source={
                      item.part_url == 'cozinha'?iconCozinha:
                      item.part_url == 'sala'?iconSala:
                      item.part_url == 'banheiro'?iconBan:
                      item.part_url == 'quarto'?iconQuarto:
                      item.part_url == 'garagem'?iconGarage:
                      item.part_url == 'quintal'?iconQuintal:
                      iconLava
                   } style={styles.icons}></Image>
                  </TouchableOpacity> 
                
              );
            }}
      />
      </SafeAreaView>
          
    </Animatable.View>

  </ImageBackground>  
)};