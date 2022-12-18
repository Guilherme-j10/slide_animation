import React from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView } from 'react-native';
import { ContainerBox } from '../ContainerBox';
import Animated, { interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { cars_data } from '../data';
import Constants from 'expo-constants';
import normalize from 'react-native-normalize'
import { CardCar } from '../CardCar';

const { width } = Dimensions.get("window");

export const Homepage: React.FC = () => {

  const scroll_position_x = useSharedValue(0);

  const scroll_event = useAnimatedScrollHandler({
    onScroll: (event) => {
      scroll_position_x.value = event.contentOffset.x
    }
  });

  const interpolated_color_style = useAnimatedStyle(() => {
    
    const color_interpolated = interpolateColor(
      scroll_position_x.value,
      cars_data.map((_, index) => width * index),
      cars_data.map((car) => car.back_color.length ? car.back_color : '#ffffff')
    ) as string
    
    return {
      backgroundColor: color_interpolated
    }
  })

  return (
    <Animated.View style={[Style.globalStyle, interpolated_color_style]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={Style.containerScrollView}>
          <Animated.ScrollView
            horizontal={true}
            onScroll={scroll_event}
            scrollEventThrottle={16}
            decelerationRate={0.9}
            snapToInterval={width}
            showsHorizontalScrollIndicator={false}
          >
            {cars_data.map((car, index) => (
              <CardCar key={index} car_data={car} />
            ))}
          </Animated.ScrollView>
          <View pointerEvents='none' style={Style.container_car_list}>
            {cars_data.map((car, index) => (
              <ContainerBox data={car} key={index} index={index} translate_x={scroll_position_x} />
            ))}
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
}

const Style = StyleSheet.create({
  globalStyle: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
  containerScrollView: {
    backgroundColor: 'transparent',
    height: normalize((width * 1564) / 974)
  },
  container_car_list: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});