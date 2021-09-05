import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const fundo = "#4682B4";
const buttons = '#47c3dd'//'#4682B4';//"#008080";
const textButons = "#FFF";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight +20,
  },
 
  header: {

    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor:"transparent",
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

  buttonNew:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:20,
  },

  buttonNewPart:{
    backgroundColor:buttons,
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:8,
    flexDirection:'row',
    height:40,
    padding:8,
  },

  buttonText:{
    color:textButons,
    marginRight:5,
    fontWeight:'bold',
  },
  
  buttonNewDevice:{
    backgroundColor:buttons,
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:8,
    flexDirection:'row',
    height:40,
    padding:8,
    marginLeft:5,
  },
  
  buttonMyHome:{
    justifyContent:'center',
    alignItems:'center',    
    backgroundColor:"transparent",
    //opacity:0.8,
    borderRadius:8,
    height:'70%',
    marginTop:10,
    paddingBottom:50,
  },
  
  buttonMyHomeTex:{
    fontSize:24,
    marginBottom:10,
    fontWeight:'bold',
    color:textButons,
  },

  stimgHouse:{
    flex:1,
    width:'100%',
  }

} );