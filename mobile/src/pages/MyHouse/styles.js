import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

import gStyle from '../../generalStyle';

export const LoadingIcon = styled.ActivityIndicator`
    margin-top:50px;
`;

export default StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight +20,
  },

  header: {
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor:'transparent',
    paddingRight:20,
  },

  headerText:{
    fontSize:27,
    fontWeight:'bold',
    color: gStyle.textButtons,
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

  buttonTextColor:{
    color:gStyle.textButtons,
  },

  headerParts:{
    marginTop:10,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:gStyle.fundo,
    paddingTop:30,
    height:50,
  },

  headerPartsText:{
    fontSize:22,
    fontWeight:'bold',
    color: gStyle.buttons,
  },

  containtParts:{
    width:'100%',
    height:380,
    backgroundColor:gStyle.fundo,
    padding:10,
  },

  item: {
    alignItems: "center",
    backgroundColor: gStyle.buttons,
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexBasis: 0,
    borderRadius:8,
  },

  text: {
    color: gStyle.textButtons
  },
  
  itemEmpty: {
    backgroundColor: "transparent"
  },

  icons:{
    width:25,
    height:25,
  },

});
