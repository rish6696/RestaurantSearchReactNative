import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ResultShowScreen from './src/screens/ResultsShowScreen'



const navigator = createStackNavigator(
  {
     Home:HomeScreen,
     Result:ResultShowScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Buisness Search'
    }
  }
);

export default createAppContainer(navigator);
