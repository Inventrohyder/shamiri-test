import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {
  ProgressChart,
} from "react-native-chart-kit";
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

  const chartConfig = {
    color: () => 'rgb(248, 248, 248)',
    backgroundGradientFrom: 'rgb(252, 252, 252)',
    backgroundGradientTo: 'rgb(252, 252, 252)',
    labelColor: () => 'rgb(150, 150, 150)',
    barPercentage: 1,
    useShadowColorFromDataset: false // optional
  };


  const data = {
    labels: ['Sense of Purpose', 'Work', 'Family/Social Support', 'Satisfaction', 'Mental Health'], // optional
    data: [4 / 10, 6 / 10, 4.5 / 10, 2.5 / 10, 8 / 10],
    colors: ['rgb(36, 51, 45)', 'rgb(150, 187, 174)', 'rgb(187, 208, 200)', 'rgb(210, 165, 157)', 'rgb(242, 232, 230)'],
  };

  return (
    <ScrollView style={styles.container}>
      <SegmentedControl style={styles.segmentContainer}
        values={['Daily', 'Weekly']}
        selectedIndex={selectedIndex}
        onChange={_onChange}
        onValueChange={_onValueChange}
      />
      {value == 'Daily' ? <View>
        <ProgressChart
          data={data}
          width={screenWidth}
          height={250}
          strokeWidth={15}
          radius={20}
          withCustomBarColorFromData={true}
          chartConfig={chartConfig}
          hideLegend={true}
        />

        <View style={styles.card}>

          <ProgressLine title='Mental Health' rating='8.5' color='rgb(242, 232, 230)' />

          <ProgressLine title='Satisfaction' rating='2.5' color='rgb(210, 165, 157)' />

          <ProgressLine title='Family/Social Support' rating='4.5' color='rgb(187, 208, 200)' />

          <ProgressLine title='Work' rating='6.0' color='rgb(150, 187, 174)' />

          <ProgressLine title='Sense of Purpose' rating='4.0' color='rgb(36, 51, 45)' />

        </View>

      </View> : <View><Text>OUtside</Text></View>}
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
    margin: 24,
    padding: 24,
    height: 350,
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
});

