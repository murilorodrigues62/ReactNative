import { createStackNavigator } from 'react-navigation'; /* Navegação por cliok */

import Main from './pages/main';

export default createStackNavigator({
    Main
}, {
    navigationOptions: {
        headerStyle: {
            backgroudColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    }
})