<template>
  <v-col cols="12" class="custom-input-col py-0 pl-6 pr-9">
    <span class="currency-form__label d-block mb-1">Currency {{ field }}</span>
    <v-text-field
      v-model="tmpValue"
      :placeholder="placeholder"
      :rules="rules"
      outlined
      @input="$emit('input', $event)"
    />
  </v-col>
</template>

<script>
export default {
  props: {
    field: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    rules: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  },

  data() {
    return {
      tmpValue: this.value
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/mixins/_text.scss';

.currency-form__label {
  @include basic-text($font-weight-semibold, $font-size-primary, $letter-spacing-primary);
}
</style>
