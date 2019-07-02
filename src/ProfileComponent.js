/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,ScrollView} from 'react-native';

export default class ProfileComponent extends Component {

  constructor(){
    super();
    this.state={
          id:'',
          name:'',
          imageUrl:'',
          address:'',
          connecttion:''
      }
  }


  componentWillMount(){
    let {item}=this.props.navigation.state.params
    this.setState({connecttion:item.connecttion,name:item.name,imageUrl:item.imageUrl,address:item.address})
    
  }

  render() {
    return (
      <View
      style={styles.container}
    >
      <ScrollView style={{flex:1,width:'100%'}}>
      <View style={{flex:1,width:'100%'}}>
          <Image
          style={{width:"100%",height:400}}
          source={this.state.imageUrl}
          resizeMode='stretch'
          />
          <View style={{padding:12}}>
            <Text style={styles.textTitle}>{this.state.name}</Text>
            <Text>{this.state.address}</Text>
            <Text>{this.state.connecttion}</Text>
            <Text style={styles.textTitle}>{this.state.name}</Text>
            <Text>{this.state.address}</Text>
            <Text>{this.state.connecttion}</Text>
            <Text style={styles.textTitle}>{this.state.name}</Text>
            <Text>{this.state.address}</Text>
            <Text>{this.state.connecttion}</Text>
            <Text style={styles.textTitle}>{this.state.name}</Text>
            <Text>{this.state.address}</Text>
            <Text>{this.state.connecttion}</Text>
            <Text style={styles.textTitle}>{this.state.name}</Text>
            <Text>{this.state.address}</Text>
            <Text>{this.state.connecttion}</Text>
            <Text style={styles.textTitle}>{this.state.name}</Text>
            <Text>{this.state.address}</Text>
            <Text>{this.state.connecttion}</Text>
            <Text style={styles.textTitle}>{this.state.name}</Text>
            <Text>{this.state.address}</Text>
            <Text>{this.state.connecttion}</Text>
            <Text style={styles.textTitle}>{this.state.name}</Text>
            <Text>{this.state.address}</Text>
            <Text>{this.state.connecttion}</Text>
          </View>
          
      </View>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textTitle:{
    fontSize:18,
    color:'#000'
  }
});
