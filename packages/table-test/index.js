import TableTest from './src/tableTest';

/* istanbul ignore next */
TableTest.install = function(Vue) {
  Vue.component(TableTest.name, TableTest);
};

export default TableTest;
