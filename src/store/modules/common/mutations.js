import types from './types';

const success = (state, obj) => {
  state.items = obj.items;
};

export default {
  [types.SUCCESS]: success
};

