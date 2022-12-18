import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { CarsData } from '../data';
import normalize from 'react-native-normalize';

const { width } = Dimensions.get("window");

interface IProps {
  index: number,
  translate_x: SharedValue<number>,
  data: CarsData
}

export const ContainerBox: React.FC<IProps> = (props) => {

  const style = useAnimatedStyle(() => {

    const translateX = interpolate(
      props.translate_x.value,
      [(props.index - 1) * width, props.index * width, (props.index + 1) * width],
      [width / 1.85, 0, -width / 1.85]
    );
    const scale = interpolate(
      props.translate_x.value,
      [(props.index - 1) * width, props.index * width, (props.index + 1) * width],
      [0.61, 1, 0.61]
    );

    return {
      transform: [{ translateX: translateX }, { scale: scale }]
    }
  })

  return (
    <Animated.View style={[Style.globalStyle, style]}>
      <View style={Style.container}>
        <Image style={{
          width: props.data.car_style_opts.width,
          height: props.data.car_style_opts.height,
          marginTop: props.data.car_style_opts.marginTop || 0
        }} source={props.data.car_image} />
      </View>
    </Animated.View>
  );
}

const Style = StyleSheet.create({
  globalStyle: {
    width: width,
    position: 'absolute',
    top: normalize(-400),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: normalize(240),
    height: normalize(240),
    justifyContent: 'center',
    alignItems: 'center'
  }
});