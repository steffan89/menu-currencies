import { mount } from '@vue/test-utils';
import NavigationIcon from '@/components/icons/navigation/Icon';

const propsData = {
  alt: 'Currencies',
  src: '/navigation/icon-currencies.svg'
};

describe('Top bar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavigationIcon, { propsData });
    expect(wrapper.vm).toBeTruthy();
  });

  it('has correct props values', () => {
    const wrapper = mount(NavigationIcon, { propsData });

    expect(wrapper.vm.alt).toBe(propsData.alt);
    expect(wrapper.vm.src).toBe(propsData.src);
  });
});
