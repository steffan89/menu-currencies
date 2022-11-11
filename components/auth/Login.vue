<template>
  <div class="login-page d-flex align-center justify-center fill-height">
    <v-card class="login-page__card">
      <v-form v-model="valid" class="login-page__form">
        <icon-menu class="mb-6" />
        <v-row>
          <v-col cols="12" class="py-0">
            <h2>Sign in</h2>
          </v-col>
          <v-col cols="12" class="py-0">
            <span class="login-page__form__text mb-6 d-block">Please enter your email and password</span>
          </v-col>
          <v-col cols="12" class="custom-input-col py-0">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              placeholder="E-mail"
              required
              outlined
            />
          </v-col>
          <v-col cols="12" class="custom-input-col py-0">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              placeholder="Password"
              required
              outlined
            />
          </v-col>
          <v-col cols="12" class="mt-2 py-0">
            <v-btn block depressed color="warning" :disabled="!valid" to="currencies">
              Sign in
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import IconMenu from '@/components/icons/IconMenu';

export default {
  name: 'LoginPage',

  components: {
    IconMenu
  },

  data: () => ({
    valid: false,
    password: '',
    passwordRules: [
      v => !!v || 'Password is required'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  })
};
</script>

<style lang="scss" scoped>
.login-page {
  background: {
    image: url('@/static/img/bg_login.jpg');
    repeat: no-repeat;
    position: center center;
  }

  .login-page__card {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    max-width: 376px !important;
  }
}

.login-page__form {
  padding: 40px 40px 52px 40px !important;
}

.login-page__form__text {
  font-size: $font-size-primary;
}
</style>
