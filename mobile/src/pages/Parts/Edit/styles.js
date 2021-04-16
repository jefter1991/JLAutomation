import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const fundo = "#FFF";
const contFundo = "#A9A9A9";
const buttons = "#008080";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor:contFundo,
  },

  header: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor:fundo,
    paddingRight:20,
  },

  headerText:{
    fontSize:16,
    fontWeight:'bold',
    color:buttons,
    marginLeft:10,
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

  error:{
    color:"#FF0000",
  },

  formContainer:{
    backgroundColor:'#FFF',
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
    color:buttons,
  },

  
formControl:{
    marginTop:30,
},

buttonConfirm:{
  backgroundColor:buttons,
  
},

} );