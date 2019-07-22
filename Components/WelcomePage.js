import {createStackNavigator, createAppContainer} from 'react-navigation';
import GetStarted from './GetStarted'
import Afford from './Afford'
const MainNavigator = createStackNavigator({
  GetStarted: {screen: GetStarted},
  Afford: {screen: Afford},
 },
 {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
   );

const WelcomePage = createAppContainer(MainNavigator);

export default WelcomePage;

