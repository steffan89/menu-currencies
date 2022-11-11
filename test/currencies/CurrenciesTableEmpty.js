import { mount } from '@vue/test-utils';
import CurrenciesTableEmpty from '@/components/currencies/CurrenciesTableEmpty';

describe('No currencies', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CurrenciesTableEmpty);
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders the correct markup', () => {
    const wrapper = mount(CurrenciesTableEmpty);
    expect(wrapper.html()).toContain('There are no currencies added.');
  });
});
