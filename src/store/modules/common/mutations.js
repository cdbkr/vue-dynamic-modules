import types from './types';

const success = (state, obj) => {
  state.items = obj.items;
  state.loading = false;
};

const loading = (state) => {
  state.loading = true;
};

export default {
  [types.SUCCESS]: success,
  [types.LOADING]: loading
};

