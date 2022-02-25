import { Entypo } from '@expo/vector-icons';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  ProgressChart
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

        <View style={{ padding: 24, backgroundColor: 'rgb(150, 187, 174)', width: screenWidth, borderBottomEndRadius: 25, borderBottomStartRadius: 25 }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>For You</Text>
          <Text style={{ fontSize: 16, color: 'white' }}>Feb 18 2022, Friday</Text>
          <View style={{
            height: 150, width: '100%', backgroundColor: 'rgb(182, 215, 205)', marginTop: 16, marginBottom: 32, borderRadius: 25,
            elevation: 1,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            alignItems: 'center'
          }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
              <Entypo name="chevron-thin-left" size={24} color="rgb(255, 255, 255)" />
              <Text style={{ color: 'rgb(255, 255, 255)', fontWeight: 'bold' }}>Jan 13 - Jan 19, 2022</Text>
              <Entypo name="chevron-thin-right" size={24} color="rgb(255, 255, 255)" />
            </View>

            <View style={{ flexDirection: 'row', height: 90, marginTop: 8, justifyContent: 'space-evenly', width: '100%' }}>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>S</Text>
                <Text style={styles.weekDayText}>13</Text>
                <View style={styles.dateCircle}></View>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>M</Text>
                <Text style={styles.weekDayText}>14</Text>
                <View style={styles.dateCircle}></View>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>T</Text>
                <Text style={styles.weekDayText}>15</Text>
                <View style={styles.dateCircle}></View>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>W</Text>
                <Text style={styles.weekDayText}>16</Text>
                <View style={styles.dateCircle}></View>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>T</Text>
                <Text style={styles.weekDayText}>17</Text>
                <View style={styles.dateCircle}></View>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>F</Text>
                <Text style={styles.weekDayText}>18</Text>
                <View style={styles.dateCircle}></View>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>S</Text>
                <Text style={styles.weekDayText}>19</Text>
                <View style={styles.dateCircle}></View>
              </View>
            </View>

          </View>
          <View style={{ position: 'absolute', right: 25, bottom: 16, marginTop: 16, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 12 }}>Show More</Text>
            <Entypo name="chevron-thin-down" size={16} color="rgb(255, 255, 255)" />
          </View>


        </View>

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
              color: 'rgb(150, 150, 150)',
            }}>
              More
            </Text>
            <Entypo name="chevron-thin-right" size={16} color='rgb(150, 150, 150)' />
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
              color: 'rgb(150, 150, 150)',
            }}>
              More
            </Text>
            <Entypo name="chevron-thin-right" size={16} color='rgb(150, 150, 150)' />
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    elevation: 1,
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
  },
  dateCircle: {
    width: 30, height: 30, backgroundColor: 'rgb(244, 249, 248)', borderRadius: 40, elevation: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  weekDayText: {
    color: 'rgb(244, 249, 248)',
    fontWeight: 'bold'
  },
  weekDay: {
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});
