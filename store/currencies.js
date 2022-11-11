import { VISIBLE_FIELDS } from '@/helpers/currency';

export const state = () => ({
  currencies: [],
  searchTerm: ''
});

export const getters = {
  getCurrencies(state) {
    return state.currencies;
  },
  getSearchTerm(state) {
    return state.searchTerm;
  },
  getSearchTermLowCase(state) {
    return state.searchTerm.toLowerCase();
  },
  getFilteredCurrencies(state, getters) {
    return state.currencies.filter((currency) => {
      const currencyValues = VISIBLE_FIELDS.map(field => currency[field].toLowerCase());
      return currencyValues.some(value => value.includes(getters.getSearchTermLowCase));
    });
  }
};

export const mutations = {
  setCurrencies(state, currencies) {
    state.currencies = currencies;
  },
  add(state, currency) {
    currency.id = getHighestIDFromArray(state.currencies) + 1;
    state.currencies.push(currency);
  },
  update(state, payload) {
    const isSameCode = payload.code === payload.currency.code;
    const codeExists = codesWithoutGiven(state.currencies, payload.code).includes(payload.currency.code.toLowerCase());
    const canUpdate = isSameCode || !codeExists;
    if (!canUpdate) {
      return;
    }
    state.currencies = state.currencies.map(currency => currency.code !== payload.code ? currency : payload.currency);
  },
  remove(state, currency) {
    const index = state.currencies.findIndex(({ code }) => code === currency.code);
    index !== -1 && state.currencies.splice(index, 1);
  },
  setSearchTerm(state, searchTerm = '') {
    state.searchTerm = searchTerm;
  }
};

export const actions = {
  add({ commit }, currency) {
    commit('add', currency);
  },
  remove({ commit }, currency) {
    commit('remove', currency);
  },
  update({ commit }, payload) {
    commit('update', payload);
  },
  setSearchTerm({ commit }, searchTerm = '') {
    commit('setSearchTerm', searchTerm);
  }
};

function getHighestIDFromArray(array) {
  const ids = array.map(({ id }) => id);
  return ids.length ? Math.max(...ids) : 0;
}

function codesWithoutGiven(currencies, code) {
  const codes = currencies.map(({ code }) => code);
  const index = codes.findIndex(value => value.toLowerCase() === code.toLowerCase());
  index !== -1 && codes.splice(index, 1);
  return codes;
}
