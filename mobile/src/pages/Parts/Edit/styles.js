import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import gStyle from '../../../generalStyle';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor:'transparent',
    paddingRight:20,
    marginBottom:20
  },

  headerText:{
    fontSize:27,
    fontWeight:'bold',
    color:gStyle.textButtons,
    marginLeft:5,
  },

  headerTextJL:{
    fontSize:36,
    fontWeight:'bold',
    color:gStyle.textButtons,
    marginLeft:5,
  },

  ContainergoBack:{
    justifyContent:'center',
    alignItems:'flex-end',
  },

  goBackButton:{
    backgroundColor:gStyle.buttons,
    padding:8,
    borderRadius:5,
    marginTop:5,
    height:30,
    justifyContent:'center',
    alignItems:'center',
  },

  error:{
    color:"#FF0000",
  },

  formContainer:{
    backgroundColor:gStyle.fundo,
    marginTop:20,
    paddingVertical:20,
    paddingHorizontal:30,
  },

  formHeader:{
    marginBottom:24,
    alignItems:'center',
    justifyContent:'center',
  },

  formHeaderText:{
    fontSize:20,
    fontWeight:'bold',
    color:gStyle.buttons,
  },

  
formControl:{
    marginTop:30,
},

buttonConfirm:{
  backgroundColor:gStyle.buttons,
  
},

} );