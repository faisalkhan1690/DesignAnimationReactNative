/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import family1 from './family1.png'


export default class HomeComponent extends Component {


  constructor(){
    super();
    this.state={
      listData:[
        {
          id:'1',
          name:'User One',
          imageUrl:require('./family1.png'),
          address:'User one adresss',
          connecttion:'1 more connection'
        },
        {
          id:'2',
          name:'User Two',
          imageUrl:require('./family2.png'),
          address:'User two adresss',
          connecttion:'2 more connection'
        },
        {
          id:'3',
          name:'User Three',
          imageUrl:require('./family3.png'),
          address:'User three adresss',
          connecttion:'3 more connection'
        },
        {
          id:'4',
          name:'User four',
          imageUrl:require('./family4.png'),
          address:'User four adresss',
          connecttion:'4 more connection'
        },
        {
          id:'5',
          name:'User Five',
          imageUrl:require('./family5.png'),
          address:'User five adresss',
          connecttion:'5 more connection'
        }
          
      ]
    }
  }

  onPressItem = (item) => {
    this.props.navigation.navigate('ProfileComponent',{item:item})
  };

  renderItem = ({item}) => (
    <TouchableOpacity
      id={item.id}
      onPress={()=>this.onPressItem(item)}
      style={styles.itemStyle}
    >
      <View style={{flex:1,width:'100%'}}>
        <Image
        style={{width:"100%",height:250}}
        source={item.imageUrl}
        resizeMode='stretch'
        />
       <Text style={styles.textTitle}>{item.name}</Text>
       <Text>{item.address}</Text>
       <Text>{item.connecttion}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={{width:'100%',alignItems:'center',padding:12}}>
          <Text style={styles.textTitle}>Discover</Text>
          </View>
        <FlatList
          data={this.state.listData}
          extraData={this.state}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  itemStyle:{
    backgroundColor:'#fff',
    marginTop:8,
    marginLeft:12,
    marginRight:12,
    padding:8
  },

  textTitle:{
    fontSize:18,
    color:'#000'
  }
});
