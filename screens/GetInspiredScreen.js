import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity , Image,SafeAreaView, ScrollView} from 'react-native';

export default class GetInspiredScreen extends React.Component{
    render(){
      return(
        <View>
            <View>

            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:40}}>As mentioned in the about us also , the basic idea of the app is to make deaf people feel included . {'\n'}But why ? {'\n'} When we think of deaf people , we think of them as a liability , people who cannot do anything .{'\n'} But that is wrong . Deaf people have also reached great heights of success which
Gives us another reason to learn sign language . {'\n'}Thus the 'LearnSilence' team gives a special tribute to deaf people by educating users about deaf people who have made success</Text>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('InspireScreen')} } 
             style={{marginTop:30,backgroundColor:'#67ddeb',borderRadius:25,height:50,width:200,alignItems:'center',justifyContent:'center',marginLeft:70}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Continue!</Text>
          </TouchableOpacity>
        </View>
        </View>
      )
    }
  }