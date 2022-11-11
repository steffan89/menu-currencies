import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import CurrenciesTable from '@/components/currencies/CurrenciesTable';
import { VISIBLE_FIELDS } from '@/helpers/currency';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Currencies header', () => {
  let getters;
  let store;
  beforeEach(() => {
    getters = {
      'currencies/getFilteredCurrencies': () => []
    };
    store = new Vuex.Store({ getters });
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(CurrenciesTable, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders the correct markup', () => {
    const wrapper = shallowMount(CurrenciesTable, { store, localVue });
    VISIBLE_FIELDS.forEach((field) => {
      expect(wrapper.html()).toContain(`Currency ${field}`);
    });
  });
});
