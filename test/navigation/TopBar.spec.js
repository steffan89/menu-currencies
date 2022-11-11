import { shallowMount } from '@vue/test-utils';
import TopBar from '@/components/navigation/TopBar';

describe('Top bar', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(TopBar);
    expect(wrapper.vm).toBeTruthy();
  });

  it('contains text', () => {
    const wrapper = shallowMount(TopBar);

    const brandLabel = wrapper.find('.app-bar__brand-label');
    expect(brandLabel.text()).toBe('Brand Name');

    const brandName = wrapper.find('.app-bar__brand-name');
    expect(brandName.text()).toBe('All Stores');
  });
});
