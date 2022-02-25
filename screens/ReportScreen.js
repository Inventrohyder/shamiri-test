import { Text } from 'react-native';

export function ReportScreen({ navigation, route }) {
  return <Text>This is {route.params.name}'s profile</Text>;
}
