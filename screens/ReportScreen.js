import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {
  ProgressChart,
  BarChart,
  LineChart
} from "react-native-chart-kit";
import { FontAwesome } from '@expo/vector-icons';
import { ProgressLine } from '../components/progressLine';

export function ReportScreen({ navigation, route }) {
  const screenWidth = Dimensions.get("window").width;
  const [value, setValue] = useState('Daily');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const _onChange = (event) => {
    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
  };

  const _onValueChange = (val) => {
    setValue(val);
  };

  const progressChartConfig = {
    color: () => 'rgb(248, 248, 248)',
    backgroundGradientFrom: 'rgb(252, 252, 252)',
    backgroundGradientTo: 'rgb(252, 252, 252)',
    labelColor: () => 'rgb(150, 150, 150)',
    barPercentage: 1,
    useShadowColorFromDataset: false // optional
  };


  const dailyData = {
    labels: ['Sense of Purpose', 'Work', 'Family/Social Support', 'Satisfaction', 'Mental Health'], // optional
    data: [4 / 10, 6 / 10, 4.5 / 10, 2.5 / 10, 8 / 10],
    colors: ['rgb(36, 51, 45)', 'rgb(150, 187, 174)', 'rgb(187, 208, 200)', 'rgb(210, 165, 157)', 'rgb(242, 232, 230)'],
  };

  const barChartConfig = {
    backgroundGradientFrom: 'rgb(255, 255, 255)',
    backgroundGradientTo: 'rgb(255, 255, 255)',
    backgroundColor: 'transparent',
    backgroundGradientToOpacity: 0,
    backgroundGradientTo: 'white',
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0,
    color: () => 'rgb(211, 166, 158)',
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    barRadius: 5,
    labelColor: () => 'rgb(150, 150, 150)',
    decimalPlaces: 0,
    useShadowColorFromDataset: false // optional
  };

  const lineChartConfig = {
    backgroundGradientFrom: 'rgb(255, 255, 255)',
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    backgroundGradientTo: 'rgb(255, 255, 255)',
    color: () => 'rgb(199, 125, 111)',
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    decimalPlaces: 0,
    labelColor: () => 'rgb(150, 150, 150)',
    useShadowColorFromDataset: false // optional
  };

  const weeklyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [5.5, 6, 5, 5.8, 6.5, 6.4, 6.3],
        colors: [
          (opacity = 1) => 'rgb(242, 232, 230)',
          (opacity = 1) => 'rgb(242, 232, 230)',
          (opacity = 1) => 'rgb(242, 232, 230)',
          (opacity = 1) => 'rgb(242, 232, 230)',
          (opacity = 1) => 'rgb(242, 232, 230)',
          (opacity = 1) => 'rgb(242, 232, 230)',
          (opacity = 1) => 'rgb(242, 232, 230)'
        ]
      }
    ]
  };

  return (
    <ScrollView style={styles.container}>
      <SegmentedControl style={styles.segmentContainer}
        values={['Daily', 'Weekly']}
        selectedIndex={selectedIndex}
        onChange={_onChange}
        onValueChange={_onValueChange}
        backgroundColor='rgb(242, 232, 230)'
      />
      {value == 'Daily' ? <View>
        <ProgressChart
          data={dailyData}
          width={screenWidth}
          height={250}
          strokeWidth={15}
          radius={40}
          withCustomBarColorFromData={true}
          chartConfig={progressChartConfig}
          hideLegend={true}
        />

        <View style={[styles.card, {
          height: 350,
          padding: 24
        }]}>

          <ProgressLine title='Mental Health' rating='8.5' color='rgb(242, 232, 230)' />

          <ProgressLine title='Satisfaction' rating='2.5' color='rgb(210, 165, 157)' />

          <ProgressLine title='Family/Social Support' rating='4.5' color='rgb(187, 208, 200)' />

          <ProgressLine title='Work' rating='6.0' color='rgb(150, 187, 174)' />

          <ProgressLine title='Sense of Purpose' rating='4.0' color='rgb(36, 51, 45)' />

        </View>

      </View> : <View>
        <Text style={{ color: 'black', fontWeight: 'bold', margin: 16 }}>Mental Health</Text>



        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 16 }}>
          <View style={styles.highlight}>
            <Text style={styles.highlightTitle}>Weekly average</Text>
            <Text style={styles.highlightValue}>6</Text>
          </View>

          <View style={styles.highlight}>
            <Text style={styles.highlightTitle}>Week-over-week</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesome name="long-arrow-down" style={{ marginRight: 8 }} size={24} color='rgb(211, 166, 158)' />
              <Text style={styles.highlightValue}>20%</Text>
            </View>
          </View>

          <View style={styles.highlight}>
            <Text style={styles.highlightTitle}>Goal</Text>
            <Text style={styles.highlightValue}>8</Text>
          </View>
        </View>



        <View
          style={{
            alignSelf: 'center'
          }}
        >

          <BarChart
            data={weeklyData}
            width={screenWidth * 0.85}
            height={220}
            fromZero={true}
            chartConfig={barChartConfig}
            withVerticalLabels={false}
            withCustomBarColorFromData={true}
            style={{ position: 'absolute', left: -15, top: 0 }}
            flatColor={true}
            withInnerLines={false}
            showBarTops={false}
          />

          <LineChart
            data={weeklyData}
            width={screenWidth * 0.85}
            withShadow={false}
            height={220}
            fromZero={true}
            chartConfig={lineChartConfig}
            withVerticalLines={false}
            withHorizontalLabels={false}
            style={{
              opacity: 1,
            }}
          />
        </View>

        <View style={styles.separator} />

        <Text style={{ color: 'black', fontWeight: 'bold', margin: 16 }}>Recommendation</Text>

        <View style={[styles.card, { borderRadius: 25, padding: 0 }]}>

          <Image source={require('../assets/touch.jpg')} style={{ width: '100%', height: 180, borderTopLeftRadius: 25, borderTopRightRadius: 25 }} />

          <View style={{ alignSelf: "flex-start" }}>
            <Text style={{ marginTop: 16, marginLeft: 16, color: 'rgb(195, 195, 195)', fontSize: 12, fontWeight: 'bold' }}>1-on-1 Session</Text>
            <Text style={{ marginTop: 8, marginLeft: 16, marginBottom: 16, fontSize: 12 }}>Talk to our therapists about employee burnout?</Text>
          </View>

        </View>

      </View>}
    </ ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(252, 252, 252)',
  },
  card: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 30,
    marginTop: 8,
    margin: 24,
    elevation: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  segmentContainer: {
    alignSelf: 'center',
    width: '80%',
    margin: 16
  },
  highlightTitle: {
    color: 'rgb(150, 150, 150)',
    fontSize: 12
  },
  highlightValue: {
    color: 'rgb(211, 166, 158)',
    fontSize: 28
  },
  highlight: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    width: '100%',
    marginTop: 24,
    borderRadius: 15,
    borderBottomColor: 'rgb(230, 230, 230)',
    borderBottomWidth: 1,
  },
});

