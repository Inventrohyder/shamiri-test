import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReportScreen } from './screens/ReportScreen';
import { HomeScreen } from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Report" component={ReportScreen} options={{ title: 'Wed Jan 16, 2022' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
