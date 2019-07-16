import TreeSelect from './src/treeSelect';

/* istanbul ignore next */
TreeSelect.install = function(Vue) {
  Vue.component(TreeSelect.name, TreeSelect);
};

export default TreeSelect;
