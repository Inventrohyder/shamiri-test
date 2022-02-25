import React from 'react';
import { Text, View } from 'react-native';

export function ProgressLine(props) {
  return <View style={{ width: '100%' }}>

    <Text style={{ color: 'rgb(150, 150, 150)', position: 'absolute', top: 0, left: 0 }}>{props.title}</Text>

    <Text style={{ color: 'rgb(150, 150, 150)', position: 'absolute', top: 0, right: 0 }}>{props.rating}/10</Text>

    <View
      style={{
        width: `${parseFloat(props.rating * 10)}%`,
        color: 'green',
        marginTop: 24,
        borderRadius: 15,
        borderBottomColor: props.color,
        borderBottomWidth: 10,
      }} />

  </View>;
}
