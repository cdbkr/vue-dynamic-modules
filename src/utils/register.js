import commonModule from '../store/modules/common/index';
export default (name, store) => {
  store.registerModule(name, commonModule);
};
