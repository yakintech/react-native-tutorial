
import { Text, View, StyleSheet } from 'react-native';
import Core from './core-components/Core';
import FlatListSample from './core-components/FlatListSample';
import SectionListSample from './core-components/SectionListSample';
import EffectFetchSample from './effectSample/EffectFetchSample';
import EffectFetchSample2 from './effectSample/EffectFetchSample2';
import EffectSample from './effectSample/EffectSample';
import StateInput from './stateSample/StateInput';
import StateSample from './stateSample/StateSample';
import StateSample2 from './stateSample/StateSample2';
import StateSample3 from './stateSample/StateSample3';
import StateSample4 from './stateSample/StateSample4';
import StateSample5 from './stateSample/StateSample5';
import StateSample6 from './stateSample/StateSample6';
import StateSample7 from './stateSample/StateSample7';

export default function App() {


  let boxes = [
    {
      title: 'Head and Face',
      description: '11 diseases',
      color: '#8DC3BB'
    },
    {
      title: 'Back and Neck',
      description: '9 diseases',
      color: '#EB7562'
    },
    {
      title: 'Elbow and Shoulders',
      description: '12 diseases',
      color: '#F1982E'
    },
    {
      title: 'Hand and Arm',
      description: '2 diseases',
      color: '#317389'
    }
  ]

  //string, number, object, array, FUNCTION!!

  const orderFinish = () => {
    alert('Finish Order');
  }

  const showText = (text) => {
    alert(text);
  }

  return (<View style={{flex:1}}>
    {/* <FlatListSample /> */}
    {/* <SectionListSample/> */}
    {/* <StateSample/> */}
    {/* <StateSample2/> */}
    {/* <StateSample3/> */}
    {/* <StateSample4/> */}
    {/* <StateSample5/> */}
    {/* <StateSample6/> */}
    {/* <StateInput/> */}
    {/* <StateSample7/> */}
    {/* <EffectSample/> */}
    {/* <EffectFetchSample/> */}
    <EffectFetchSample2/>
  </View>);

}


const styles = StyleSheet.create({

  title: {
    flex: 2
  }
})
