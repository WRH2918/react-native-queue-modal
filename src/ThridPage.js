import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import CommonModal from './modal/CommonModal';
import FirstModal from './modals/FirstModal';
import SencondModal from './modals/SencondModal';
const ThridPage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          CommonModal.showUnId(<FirstModal />);
          // setTimeout(() => {
          //   CommonModal.showUnId(<SencondModal />);
          // }, 3000);

          CommonModal.showUnId(<SencondModal name={2} />);
          CommonModal.showUnId(<SencondModal name={3} />);
          CommonModal.showUnId(<SencondModal name={4} />);
        }}>
        <Text>第三</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThridPage;
