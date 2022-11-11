import { mount } from '@vue/test-utils';
import CurrenciesHeader from '@/components/currencies/CurrenciesHeader';

describe('Currencies header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CurrenciesHeader, {
      stubs: ['router-link']
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('Currencies');
    expect(wrapper.html()).toContain('Add currency');
  });

  it('contains title', () => {
    const title = wrapper.find('.page-title');
    expect(title.text()).toBe('Currencies');
  });
});
