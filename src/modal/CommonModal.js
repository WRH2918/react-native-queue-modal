import {cloneElement} from 'react';
import {registerBackHand, unregisterBackHand} from './AndroidBackPress';
import RootSiblings from 'react-native-root-siblings';

const rootModal = [];
const CommonModal = (children) => {
  return new RootSiblings(
    cloneElement(children, {hide: () => hide(children?.type?.name)}),
  );
};

//展示（相同的组件name 相同组件的模态框调用x次依次显示1个弹框）
const show = (children) => {
  const name = children?.type?.name;
  const modalName = rootModal[`rootModal_${name}`];
  if (!modalName && Object.keys(rootModal).length === 0) {
    rootModal[`rootModal_${name}`] = CommonModal(children);
    registerBackHand(() => hide(name));
  } else if (!modalName) {
    rootModal[`rootModal_${name}`] = children;
  }
};

// 展示 (相同组件的模态框调用x次依次显示x个弹框)
const showUnId = (children) => {
  const rmLength = rootModal.length;
  const name = children?.type?.name;
  if (rmLength === 0) {
    rootModal[0] = {
      key: `rootModal_${name}`,
      value: CommonModal(children),
    };
    registerBackHand(hide);
  } else {
    rootModal[rmLength] = {
      key: `rootModal_${name}`,
      value: children,
    };
  }
};

// 队列弹框显示下一个弹框
const nextModal = () => {
  // 获取rootModal的元素对象以数组显示
  const objRootModal = Object.keys(rootModal);
  const rmLength = objRootModal.length;
  if (rmLength !== 0) {
    let modal = null;
    if (rootModal[0]?.value) {
      modal = rootModal[0]?.value;
      rootModal[0]['value'] = CommonModal(modal);
      registerBackHand(hide);
    } else {
      modal = rootModal[objRootModal[0]];
      rootModal[objRootModal[0]] = CommonModal(modal);
      const name = modal?.type?.name;
      registerBackHand(() => hide(name));
    }
  }
};

//销毁
const hide = async (name) => {
  let modalName = null;
  if (rootModal.length === 0) {
    modalName = rootModal[`rootModal_${name}`];
    if (modalName) {
      modalName.destroy();
      unregisterBackHand();
      await delete rootModal[`rootModal_${name}`];
      nextModal();
    }
  } else {
    modalName = rootModal[0]?.value;
    if (modalName) {
      modalName.destroy();
      unregisterBackHand();
      await rootModal.splice(0, 1);
      nextModal();
    }
  }
};

export default {
  show,
  hide,
  showUnId,
};
