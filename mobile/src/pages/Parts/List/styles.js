import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

import gStyle from '../../../generalStyle';

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
    color: gStyle.textButtons,
    marginLeft:10,
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
    
    justifyContent:"center",
    alignItems:'center',
    paddingTop:10,
    height:40,
  },

  headerPartsText:{
    fontSize:25,
    fontWeight:'bold',
    color: gStyle.textButtons,
  },

  containerList:{
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  listItem:{
    backgroundColor: gStyle.buttons,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    justifyContent:'space-between'
    
  },

  listItemText:{
    fontSize:22,
    fontWeight:'bold',
    color:gStyle.textButtons,
  },
});
