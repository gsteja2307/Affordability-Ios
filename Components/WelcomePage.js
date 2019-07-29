import { createStackNavigator, createAppContainer } from 'react-navigation';
import GetStarted from './GetStarted'
import Afford from './Afford'
import Loginpage from './Loginpage'
const MainNavigator = createStackNavigator({
  GetStarted: { screen: GetStarted },
  Loginpage: { screen: Loginpage },
  Afford: { screen: Afford },
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