import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Dev Radar'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil do github'
      }
    }
  }, {
    defaultNavigationOptions: {
      headerBackTitleVisible: null,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#7D40e7'
      }
    },
  },)
);

export default Routes;