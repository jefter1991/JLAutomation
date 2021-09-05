import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const fundo = "#FFF";
const contFundo = "#A9A9A9";
const buttons = "#47c3dd";
const textButons = "#FFF";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight +20,
    backgroundColor:contFundo,
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
    color:textButons,
    marginLeft:5,
  },

  headerTextJL:{
    fontSize:36,
    fontWeight:'bold',
    color:textButons,
    marginLeft:5,
  },


  ContainergoBack:{
    justifyContent:'center',
    alignItems:'flex-end',
  },

  goBackButton:{
    backgroundColor:buttons,
    padding:8,
    borderRadius:5,
    marginTop:5,
    height:30,
    justifyContent:'center',
    alignItems:'center',
  },

 formContainer:{
    backgroundColor:textButons,
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
    color:  buttons,
  },

  
  formControl:{
      marginTop:30,
  },

});