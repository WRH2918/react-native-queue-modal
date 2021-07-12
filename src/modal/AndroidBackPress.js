import {BackHandler} from 'react-native';

let closeModal = null;
let backSubscription = null;
// 直接传入 closeModal 方法
export const registerBackHand = (hide) => {
  closeModal = hide;
  backSubscription = BackHandler.addEventListener(
    'hardwareBackPress',
    hardwareBackPress,
  );
};

export const unregisterBackHand = () => {
  backSubscription && backSubscription.remove();
};

const hardwareBackPress = (e) => {
  if (closeModal) {
    closeModal();
    closeModal = null;
    backSubscription && backSubscription.remove();
    return true;
  }
  return false;
};
