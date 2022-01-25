/* 
  使用 emitter 方法的原因，因为可能在不同的多个组件里面都有监听这个事件
*/

function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

export default {
  methods: {
    // 子组件发送消息给上层组件
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      // 循坏父组件，直到找到或达到跟元素
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        // 如果找到目标组件，那么调用目标组件的$emit方法
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    // 上层组件通知下层组件
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
