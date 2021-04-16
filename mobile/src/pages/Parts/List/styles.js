import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const fundo = "#FFF";
const contFundo = "#A9A9A9";
const buttons = "#47c3dd";//"#4682B4";
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
    color: textButons,
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

  buttonTextColor:{
    color:textButons,
  },

  headerParts:{
    
    justifyContent:"center",
    alignItems:'center',
    paddingTop:10,
    height:40,
  },

  headerPartsText:{
    fontSize:25,
    fontWeight:'bold',
    color: textButons,
  },

  containerList:{
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  listItem:{
    backgroundColor: buttons,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    justifyContent:'space-between'
    
  },

  listItemText:{
    fontSize:22,
    fontWeight:'bold',
    color:textButons,
  },
});
