import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { CarsData } from '../data';
import normalize from 'react-native-normalize';

const { width } = Dimensions.get('window');

interface IProps {
  car_data: CarsData
}

export const CardCar: React.FC <IProps> = (props) => {
  return (
    <View style={Style.container_style}>
      <View style={[ Style.ContainerBox, { backgroundColor: props.car_data.car_color } ]}>

      </View>
    </View>
  );
}

export const Style = StyleSheet.create({
  container_style: {
    width: width,
    height: normalize((width * 1564) / 974),
    padding: normalize(30)
  },
  ContainerBox: {
    width: '100%',
    height: '100%',
    borderRadius: 20
  }
});