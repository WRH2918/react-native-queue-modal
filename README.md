# react-native-queue-modal
react-native 队列弹框.   
基于react-native-root-siblings实现.   
需要先安装依赖 yarn add react-native-root-siblings.   
主要文件CommonModal.js 和 AndroidBackPress.js实现在同一个页面同时间出现多个弹框重叠的解决方案。  
同时实现在任何地方调用显示模态框，无需再render渲染后通过setState显示弹框。  
>使用方法：  
>>1.导入CommonModal.  
>>2.使用 CommonModal.show(-----需要显示element或组件-----)显示模态框.  
>>3.关闭调用组件属性中的hide()方法关闭模态框.  
