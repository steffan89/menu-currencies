import { mount } from '@vue/test-utils';
import CurrencyFormInput from '@/components/currency-form/CurrencyFormInput';

const propsData = {
  field: 'name',
  placeholder: 'Add currency',
  rules: [],
  value: ''
};

describe('Currency form input', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CurrencyFormInput, {
      propsData
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('contains label', () => {
    const wrapper = mount(CurrencyFormInput, {
      propsData
    });

    const label = wrapper.find('.currency-form__label');
    expect(label.text()).toBe(`Currency ${propsData.field}`);
  });

  it('has correct values', async () => {
    const wrapper = mount(CurrencyFormInput, {
      propsData
    });

    const input = wrapper.find('input');
    await input.setValue('Dollar');

    expect(input.element.value).toBe('Dollar');
  });
});
