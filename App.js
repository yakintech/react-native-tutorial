
import { Text, View, StyleSheet } from 'react-native';
import UserDetail from './jsxSample/UserDetail';
import Box from './templateSample/Box';
import Header from './templateSample/Header';
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

  return (<View style={{ flex: 1, padding: '5%' }}>

    <UserDetail />
    <Header />

    <View style={styles.title}>
      <Text>Learn</Text>
      <Text>Choose the part of the body</Text>
    </View>

    {/* <Box color='#8DC3BB' title='Head and Face' description='11 diseases'></Box>
    <Box color='#EB7562' title='Back and Neck' description='9 diseases'></Box>
    <Box color='#F1982E' title='Elbow and Shoulders' description='12 diseases'></Box>
    <Box color='#317389' title='Hand and Arm' description='2 diseases'></Box> */}

    {
      boxes.map(item =>
        <Box
          title={item.title}
          description={item.description}
          color={item.color}></Box>
      )
    }


  </View>);

}


const styles = StyleSheet.create({

  title: {
    flex: 2
  }
})
