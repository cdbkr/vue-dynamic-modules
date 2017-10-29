import types from './types';

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const generate = ({ commit, state }, options = {}) => {
  const { min = 0, max = 100 } = options;
  if (state.items === 0 && !state.loading) {
    commit(types.LOADING);
    setTimeout(() => {
      commit(types.SUCCESS, {
        items: randomInt(min, max)
      });
    }, 2000);
  }
};

export default {
  generate
};
