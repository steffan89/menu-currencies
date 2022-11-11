import { shallowMount } from '@vue/test-utils';
import CurrencyForm from '@/components/currency-form/CurrencyForm';

const $route = {
  path: 'currencies/add',
  params: {}
};

describe('Currency form', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(CurrencyForm, {
      mocks: {
        $route
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('contains title', () => {
    const wrapper = shallowMount(CurrencyForm, {
      mocks: {
        $route
      }
    });

    const title = wrapper.find('.currency-form__title');
    expect(title.text()).toBe('Add currency');
  });
});
