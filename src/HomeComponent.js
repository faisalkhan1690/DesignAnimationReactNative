/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View,TouchableOpacity,Dimensions,Image,Animated} from 'react-native';

export default class HomeComponent extends Component {


  constructor(){
    super();
    this.offset = 0;
    this.state={
      scrollOffset: new Animated.Value(0),
      titleWidth: 0,
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

  componentDidMount() {
    this.state.scrollOffset.addListener(({ value }) => (this.offset = value));
  }

  onScroll = e => {
    const scrollSensitivity = 4 / 3;
    const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
    this.state.scrollOffset.setValue(offset);
  };

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

    const { scrollOffset } = this.state;
    const screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
         <Animated.View
          style={[
            styles.header,
            {
              paddingHorizontal: screenWidth * 0.05,
              width: screenWidth,
              height: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [120, 64],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <Animated.Text
            onLayout={e => {
              if (this.offset === 0 && this.state.titleWidth === 0) {
                const titleWidth = e.nativeEvent.layout.width;
                this.setState({ titleWidth });
              }
            }}
            style={{
              fontWeight: 'bold',
              fontSize: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [26, 20],
                extrapolate: 'clamp',
              }),
            }}>
            Header Title Here
          </Animated.Text>
          <Animated.View
            style={{
              width: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [screenWidth * 0.9 - this.state.titleWidth, 0],
                extrapolate: 'clamp',
              }),
            }}
          />
        </Animated.View>
        <FlatList
          data={this.state.listData}
          extraData={this.state}
          onScroll={this.onScroll}
          scrollEventThrottle={20}
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
  },
  header: {
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
  },
});
