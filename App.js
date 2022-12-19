
import { Text, View, StyleSheet } from 'react-native';
import Core from './core-components/Core';

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

  return (<>
    <Core/>

  </>);

}


const styles = StyleSheet.create({

  title: {
    flex: 2
  }
})
