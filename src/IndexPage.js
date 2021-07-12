import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Dimensions,
} from 'react-native';
import {Colors} from '../node_modules/react-native/Libraries/NewAppScreen'
import RootSiblings from "react-native-root-siblings"
import CommonModal from './modal/CommonModal';
import FirstModal from './modals/FirstModal';
var id = 0;
var elements = [];
const IndexPage = (props) => {
  const addSibling = () => {
    let sibling = new RootSiblings(
      (
        <View style={[styles.sibling, {top: id * 20}]}>
          <Text>I`m No.{id}</Text>
        </View>
      ),
    );
    id++;
    elements.push(sibling);
  };

  const destroySibling = () => {
    let lastSibling = elements.pop();
    lastSibling && lastSibling.destroy();
  };

  const updateSibling = () => {
    let lastId = elements.length - 1;
    lastId >= 0 &&
      elements[lastId].update(
        <View style={[styles.sibling, {top: lastId * 20}]}>
          <Text>
            I`m No.{lastId} : {Math.random()}
          </Text>
        </View>,
      );
  };




  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={addSibling}>
          <Text style={styles.buttonText}>Add element</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={destroySibling}>
          <Text style={styles.buttonText}>Destroy element</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={updateSibling}>
          <Text style={styles.buttonText}>Update element</Text>
        </TouchableHighlight>
      </View> */}
       <TouchableHighlight style={styles.button} onPress={()=>{
         console.log(props)
         props.navigation.navigate('ThridPage')
        // CommonModal.show(<FirstModal/>)
       }}>
          <Text style={styles.buttonText}>thrid</Text>
        </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  button: {
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
    borderColor: '#333',
    borderWidth: 1,
  },
  buttonText: {
    color: '#000',
  },
  sibling: {
    left: 0,
    height: 20,
    width: Dimensions.get('window').width / 2,
    backgroundColor: 'blue',
    opacity: 0.5,
  },
});

export default IndexPage;
