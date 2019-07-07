
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeComponent from './src/HomeComponent'
import ProfileComponent from './src/ProfileComponent'
import {Animated,Platform,Easing} from 'react-native';

let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]),
  });

  return {
    opacity,
    transform: [
      { scaleY }
    ]
  };
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        collapseExpand: CollapseExpand(index, position),
        default: CollapseExpand(index, position)
      }[transition];
    },
  }
}

const MainNavigator = createStackNavigator({
  HomeComponent: {
    screen: HomeComponent,
    navigationOptions: {
      header: null 
    }
  },
  ProfileComponent: {
    screen: ProfileComponent,
    navigationOptions: {
      header: null 
    }
  }
},
{
    initialRouteName: 'HomeComponent',
    mode: Platform.OS === "ios" ? "modal" : "card",
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false
      },
      gesturesEnabled: false
    },
    gesturesEnabled: false,
    transitionConfig: TransitionConfiguration,
});
const App = createAppContainer(MainNavigator);
export default App;
