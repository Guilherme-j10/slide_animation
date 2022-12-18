import { ImageSourcePropType } from 'react-native';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import Img4 from '../assets/img4.png';
import Img5 from '../assets/img5.png';
import Img6 from '../assets/img6.png';
import Img9 from '../assets/img9.png';
import normalize from 'react-native-normalize';

export interface CarsData {
  car_name: string,
  car_image: ImageSourcePropType,
  car_color: string,
  back_color: string,
  car_description: string,
  car_style_opts: {
    marginTop?: number,
    marginBottom?: number,
    height: number,
    width: number
  }
}

export const cars_data: CarsData[] = [
  {
    back_color: '#fad05a',
    car_color: '#fcba03',
    car_description: 'bla bla bla bla',
    car_name: 'porsche',
    car_image: Img1,
    car_style_opts: {
      width: normalize(230),
      height: normalize(100)
    }
  },
  {
    back_color: '#c1f547',
    car_color: '#87bf04',
    car_description: 'bla bla bla bla',
    car_name: 'porsche',
    car_image: Img2,
    car_style_opts: {
      width: normalize(230),
      height: normalize(150),
      marginTop: normalize(-50)
    }
  },
  {
    back_color: '#33d6c0',
    car_color: '#07b099',
    car_description: 'bla bla bla bla',
    car_name: 'porsche',
    car_image: Img3,
    car_style_opts: {
      width: normalize(230),
      height: normalize(100)
    }
  },
  {
    back_color: '#4f89f7',
    car_color: '#185ad6',
    car_description: 'bla bla bla bla',
    car_name: 'porsche',
    car_image: Img4,
    car_style_opts: {
      width: normalize(230),
      height: normalize(100)
    }
  },
  {
    back_color: '#b63afc',
    car_color: '#7e04c4',
    car_description: 'bla bla bla bla',
    car_name: 'porsche',
    car_image: Img5,
    car_style_opts: {
      width: normalize(230),
      height: normalize(100)
    }
  },
  {
    back_color: '#4f4f4f',
    car_color: '#2b2b2b',
    car_description: 'bla bla bla bla',
    car_name: 'porsche',
    car_image: Img6,
    car_style_opts: {
      width: normalize(230),
      height: normalize(100)
    }
  },
  {
    back_color: '#f75c5c',
    car_color: '#c71c1c',
    car_description: 'bla bla bla bla',
    car_name: 'porsche',
    car_image: Img9,
    car_style_opts: {
      width: normalize(230),
      height: normalize(100)
    }
  }
]