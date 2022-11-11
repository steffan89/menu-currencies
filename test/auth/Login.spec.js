import { shallowMount } from '@vue/test-utils';
import Login from '@/components/auth/Login';

describe('Login', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Login, {
      stubs: ['router-link']
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders the correct markup', () => {
    const wrapper = shallowMount(Login, {
      stubs: ['router-link']
    });
    expect(wrapper.html()).toContain('E-mail');
    expect(wrapper.html()).toContain('Password');
  });

  // it('renders the correct markup', async () => {
  //   const wrapper = shallowMount(Login, {
  //     stubs: ['router-link']
  //   });
  //
  //   const [email, password] = wrapper.findAll('input');
  //   await email.setValue('stefan@example.com');
  //   await password.setValue('pass123');
  //
  //   expect(email.element.value).toBe('stefan@example.com');
  //   expect(password.element.value).toBe('pass123');
  // });
});
