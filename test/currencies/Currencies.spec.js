import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Currencies from '@/components/currencies/Currencies';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Currencies', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({});
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Currencies, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
  });
});
