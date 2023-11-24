import { SafeAreaView, Text, FlatList, StyleSheet, View } from 'react-native';

const data = [
  {
    mob: 'zumbie',
    hostil: 's'
  },
  {
    mob: 'skeleton',
    hostil: 's'
  },
  {
    mob: 'pig',
    hostil: 'n'
  },
  {
    mob: 'ender dragon',
    hostil: 's'
  },
  {
    mob: 'whiter skeleton',
    hostil: 's'
  },
  {
    mob: 'bee',
    hostil: 'n'
  },
  {
    mob: 'spider',
    hostil: 's'
  },
  {
    mob: 'wolf',
    hostil: 'n'
  }
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={data}
        renderItem={({item}) =>
        <View style={styles.item}>
          <Text style={styles.title}>{item.mob}</Text>
        </View>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 10
  },
  item: {
    backgroundColor: 'lightgreen',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4
  },
  title: {
    fontSize: 32,
  },
})