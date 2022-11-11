import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import CurrenciesTableRow from '@/components/currencies/CurrenciesTableRow';

const localVue = createLocalVue();
localVue.use(Vuex);

const currency = {
  name: 'Dollar',
  code: 'usd',
  symbol: '$'
};

const $route = {
  path: 'currencies',
  params: {}
};

describe('Currencies table row', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({});
  });

  test('is a Vue instance', () => {
    const wrapper = mount(CurrenciesTableRow, {
      mocks: {
        $route
      },
      store,
      localVue,
      propsData: {
        currency
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('sets currency value', () => {
    const wrapper = mount(CurrenciesTableRow, {
      mocks: {
        $route
      },
      store,
      localVue,
      propsData: {
        currency
      }
    });

    expect(wrapper.vm.currency.name).toBe(currency.name);
    expect(wrapper.vm.currency.code).toBe(currency.code);
    expect(wrapper.vm.currency.symbol).toBe(currency.symbol);
  });

  it('has correct props values', () => {
    const wrapper = mount(CurrenciesTableRow, {
      mocks: {
        $route
      },
      store,
      localVue,
      propsData: {
        currency
      }
    });
    expect(wrapper.html()).toContain(currency.name);
    expect(wrapper.html()).toContain(currency.code);
    expect(wrapper.html()).toContain(currency.symbol);
  });
});
