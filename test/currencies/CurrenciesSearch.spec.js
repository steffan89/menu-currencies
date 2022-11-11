import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import CurrenciesSearch from '@/components/currencies/CurrenciesSearch';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Currencies search', () => {
  let getters;
  let store;
  beforeEach(() => {
    getters = {
      'currencies/getSearchTerm': () => 'eur'
    };
    store = new Vuex.Store({ getters });
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(CurrenciesSearch, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders the correct markup', () => {
    const wrapper = shallowMount(CurrenciesSearch, { store, localVue });
    expect(wrapper.html()).toContain('Search');
  });
});
