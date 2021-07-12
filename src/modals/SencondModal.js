import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
const SencondModal = (props) => {
  const {hide, name} = props;
  return (
    <TouchableOpacity
      onPress={hide}
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      activeOpacity={1}>
      <Text style={{color: '#fff'}}>SencondModal{name}</Text>
    </TouchableOpacity>
  );
};

export default SencondModal;
