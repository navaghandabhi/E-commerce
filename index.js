import { AppRegistry } from 'react-native';
import App from './src/Routes/StackNavigator';
import { PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json';
import { Theme } from './src/data/Theme/theme';
const Main = () => {
    return (
        <PaperProvider theme={Theme}> 
            <App></App>
        </PaperProvider>
    )
}
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Main);