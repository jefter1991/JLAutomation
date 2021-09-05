import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const fundo = "#FFF";
const buttons = "#47c3dd";
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
    paddingRight:20,
    marginBottom:10,
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
    color: textButons,
  },

  headerDevices:{
    //marginTop:10,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'transparent',
    paddingTop:10,
    height:40,
  },

  headerDevicesText:{
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
  },

  listItemPart:{
    flexDirection:'row',
    justifyContent:'space-between'
  },

  listItemText:{
    fontSize:22,
    fontWeight:'bold',
    color: textButons,
  },
  listItemPartText:{
    fontSize:16,
    color:textButons
  },

});
