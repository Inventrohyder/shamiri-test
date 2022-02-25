import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, StyleSheet, Dimensions } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import {
  ProgressChart,
} from "react-native-chart-kit";


export function HomeScreen({ navigation }) {
  const screenWidth = Dimensions.get("window").width;


  const chartConfig = {
    color: () => 'rgb(250, 250, 250)',
    backgroundGradientFrom: 'rgb(255, 255, 255)',
    backgroundGradientTo: 'rgb(255, 255, 255)',
    labelColor: () => 'rgb(150, 150, 150)',
    strokeWidth: 2, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false // optional
  };


  const data = {
    labels: ['Sense of Purpose', 'Work', 'Family/Social Support', 'Satisfaction', 'Mental Health'], // optional
    data: [4 / 10, 6 / 10, 4.5 / 10, 2.5 / 10, 8 / 10],
    colors: ['rgb(36, 51, 45)', 'rgb(150, 187, 174)', 'rgb(187, 208, 200)', 'rgb(210, 165, 157)', 'rgb(242, 232, 230)'],
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Report', { name: 'Jane' })} />

      <View style={styles.card}>
        <Text style={{
          textTransform: 'uppercase',
          fontStyle: 'bold',
          color: 'rgb(150, 150, 150)',
        }}>
          Today
        </Text>

        <ProgressChart
          data={data}
          width={screenWidth * 0.8}
          height={150}
          strokeWidth={8}
          radius={20}
          withCustomBarColorFromData={true}
          chartConfig={chartConfig}
          hideLegend={false}
        />

        <View style={{
          alignSelf: 'flex-end',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Text style={{
            fontStyle: 'bold',
            fontSize: 8,
            marginRight: 8,
            color: 'rgb(150, 150, 150)',
          }}>
            More
          </Text>
          <Octicons name="chevron-right" size={16} color='rgb(150, 150, 150)' />
        </View>



      </View>

    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 250, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 30,
    margin: 8,
    padding: 16,
    elevation: 1,
  }
});
