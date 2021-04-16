import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const fundo = "#FFF";
const contFundo = "#A9A9A9";
const buttons = '#47c3dd';//'#4682B4';
const textButons = "#FFF";

export default StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight +20,
   // backgroundColor:contFundo,
  },

  header: {
    //flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor:'transparent',
    paddingRight:20,
  },

  headerText:{
    fontSize:27,
    fontWeight:'bold',
    color: textButons,
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

  buttonTextColor:{
    color:textButons,
  },

  headerParts:{
    marginTop:10,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:fundo,
    paddingTop:10,
    height:70,
  },

  headerPartsText:{
    fontSize:22,
    fontWeight:'bold',
    color: buttons,
  },

  containtParts:{
    width:'100%',
    height:380,
    backgroundColor:fundo,
    padding:10,
  },

  item: {
    alignItems: "center",
    backgroundColor: buttons,
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexBasis: 0,
    borderRadius:8,
  },

  text: {
    color: textButons
  },
  
  itemEmpty: {
    backgroundColor: "transparent"
  },

  icons:{
    width:25,
    height:25,
  },

});
