import Row from './src/row';

/* istanbul ignore next */
Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};


/* 
  这句话导出 Row，提供我们 import, 而中间的 install 方法则是把组件当成一个 Vue 的插件来使用，通过 Vue.use()；
  最后通过export default导出,而不是常用的单文件组件形式，因此必须提供install方法

  组件的使用：
    1、作为插件，Vue.use()
    2、作为全局组件，Vue.component(componentName, component);(常用的组件最好全局注册)
  */
export default Row;

