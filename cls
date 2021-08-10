warning: LF will be replaced by CRLF in mobile/app.json.
The file will have its original line endings in your working directory
[1mdiff --git a/backend/src/database/db.sqlite b/backend/src/database/db.sqlite[m
[1mindex ac9546c..e4ca64f 100644[m
Binary files a/backend/src/database/db.sqlite and b/backend/src/database/db.sqlite differ
[1mdiff --git a/mobile/app.json b/mobile/app.json[m
[1mindex d709ee5..cea2cbb 100644[m
[1m--- a/mobile/app.json[m
[1m+++ b/mobile/app.json[m
[36m@@ -26,7 +26,9 @@[m
     },[m
     "android": {[m
       "package": "com.JLSystem.JLAutomation"[m
[31m-    }[m
[32m+[m[32m    },[m
[32m+[m[32m    "description": "",[m
[32m+[m[32m    "githubUrl": "https://github.com/jefter1991/jlautomation"[m
   },[m
   "android": {[m
     "package": "com.JLSystem.JLAutomation",[m
[1mdiff --git a/mobile/src/pages/Devices/Edit/index.js b/mobile/src/pages/Devices/Edit/index.js[m
[1mindex e69de29..2ca64fd 100644[m
[1m--- a/mobile/src/pages/Devices/Edit/index.js[m
[1m+++ b/mobile/src/pages/Devices/Edit/index.js[m
[36m@@ -0,0 +1,179 @@[m
[32m+[m[32mimport React,{useEffect, useState} from 'react';[m
[32m+[m[32mimport {View, Text, TextInput, Picker, Button, TouchableOpacity, ImageBackground} from 'react-native';[m
[32m+[m[32mimport * as Animatable from 'react-native-animatable';[m
[32m+[m[32mimport { useFormik } from 'formik';[m
[32m+[m[32mimport { useNavigation, useRoute } from '@react-navigation/native';[m
[32m+[m[32mimport { Feather} from '@expo/vector-icons';[m
[32m+[m
[32m+[m[32mimport api from '../../../services/api';[m
[32m+[m
[32m+[m[32mimport styles from './styles';[m
[32m+[m[32mimport imgBg from '../../../assets/Fundo.jpeg';[m
[32m+[m
[32m+[m[32mexport default function Devices(){[m
[32m+[m[32m  const route = useRoute();[m
[32m+[m[32m  let device = route.params.item;[m
[32m+[m[32m  const [name, setName] = useState(device.dev_name);[m
[32m+[m[32m  const [ip, setIp] = useState(device.dev_ip);[m
[32m+[m[32m  const [parts, setParts] = useState([]);[m
[32m+[m[32m  const[part,setPart] = useState(device.dev_part);[m
[32m+[m[32m  const [url, setUrl] = useState(device.dev_url);[m
[32m+[m[32m  const [status, setStatus] = useState(device.dev_status);[m
[32m+[m[32m  const navigation = useNavigation();[m
[32m+[m[41m  [m
[32m+[m
[32m+[m[32m  const type = [[m
[32m+[m[32m    {url: 'Lampada'},[m
[32m+[m[32m    {url: 'Portão'},[m
[32m+[m[32m    {url: 'Motor Portão'},[m
[32m+[m[32m    {url: 'Ventilador'},[m
[32m+[m[32m    {url: 'Ar-Condicionado'},[m
[32m+[m[32m  ];[m
[32m+[m
[32m+[m[32m  async function loadParts(){[m
[32m+[m[41m    [m
[32m+[m[32m    const response = await api.get('/parts');[m
[32m+[m[32m    setParts(response.data);[m
[32m+[m[41m   [m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  useEffect(() =>{[m
[32m+[m[32m    loadParts();[m
[32m+[m
[32m+[m[32m  },[ ]);[m
[32m+[m
[32m+[m[32m  function goBack(){[m
[32m+[m[32m    navigation.goBack();[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  async function editDevice(dev_id, dev_name, dev_ip, dev_status=status, dev_url,  dev_part){[m
[32m+[m[32m    console.log('Status:'+ dev_status);[m
[32m+[m[32m    const data = {[m
[32m+[m[32m      dev_id,[m
[32m+[m[32m      dev_name,[m[41m [m
[32m+[m[32m      dev_ip,[m
[32m+[m[32m      dev_status,[m[41m [m
[32m+[m[32m      dev_url,[m[41m  [m
[32m+[m[32m      dev_part[m
[32m+[m[32m    };[m
[32m+[m[41m    [m
[32m+[m[32m    try{[m
[32m+[m[32m      const response = await api.post('/updatedevice', data);[m
[32m+[m[41m      [m
[32m+[m[32m      alert(response.data);[m
[32m+[m[41m      [m
[32m+[m[32m      if(response.data == 'Alterado com sucesso!')[m[41m [m
[32m+[m[32m          navigation.navigate('Home');[m[41m   [m
[32m+[m[32m    } catch(err) {[m
[32m+[m[41m     [m
[32m+[m[32m      alert ('Erro ao Alterar!!');[m
[32m+[m[32m      console.log(err);[m
[32m+[m[32m      alert(response.data);[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  const {values, 