import { AppRegistry } from 'react-native';
import App from './src/Routes/StackNavigator';
import { PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json';

const Main = () => {
    return (
        <PaperProvider>
            <App></App>
        </PaperProvider>
    )
}
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Main);