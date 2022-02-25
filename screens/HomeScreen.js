import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
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

      <ScrollView>

        <View style={styles.card}>
          <Text style={styles.cardHeading}>
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
            style={{
              alignSelf: 'center'
            }}
          />

          <View style={styles.more}
            onStartShouldSetResponder={() => navigation.navigate('Report')}
          >
            <Text style={{
              fontSize: 12,
              marginRight: 4,
              color: 'rgb(150, 150, 150)',
            }}>
              More
            </Text>
            <Octicons name="chevron-right" size={16} color='rgb(150, 150, 150)' />
          </View>




        </View>

        <View style={styles.card}>
          <Text style={styles.cardHeading}>
            Your wellness plan
          </Text>

          <ImageBackground source={require('../assets/touch.jpg')} style={{ width: 100, height: 150, marginRight: 16 }} imageStyle={{ borderRadius: 25 }}>
            <View style={styles.counselor}>
              <Text style={{ color: 'white' }}>Veronican N.</Text>
              <Text style={{ fontSize: 6, color: 'white' }}>Shamiri Licenced Counsellor</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={require('../assets/touch.jpg')} style={{ width: 100, height: 150 }} imageStyle={{ borderRadius: 25 }}>
            <View style={styles.counselor}>
              <Text style={{ color: 'white' }}>Sunehra A.</Text>
              <Text style={{ fontSize: 6, color: 'white' }}>Shamiri Licenced Counsellor</Text>
            </View>
          </ImageBackground>

          <View style={styles.more}
          >
            <Text style={{
              fontSize: 12,
              marginRight: 4,
              color: 'rgb(150, 150, 150)',
            }}>
              More
            </Text>
            <Octicons name="chevron-right" size={16} color='rgb(150, 150, 150)' />
          </View>


        </View>

      </ScrollView>
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
    height: 250,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardHeading: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'rgb(150, 150, 150)',
    position: 'absolute',
    top: 16,
    left: 16,
  },
  more: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  counselor: {
    position: 'absolute',
    bottom: 0,
    padding: 8,
    backgroundColor: 'rgba(150, 187, 174, 0.5)',
    width: '100%',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  }
});
