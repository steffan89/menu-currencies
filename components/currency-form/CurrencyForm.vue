<template>
  <v-form v-model="valid" class="currency-form fill-height">
    <v-row class="currency-form__header pt-3 mb-4">
      <v-col cols="7" class="align-center d-flex pl-6">
        <a class="mr-3" @click="returnToCurrencies">
          <icon-close class="d-block" />
        </a>
        <span class="currency-form__title">{{ title }}</span>
      </v-col>
      <v-col cols="5" class="d-flex justify-end pr-9">
        <v-btn depressed @click="returnToCurrencies">
          Cancel
        </v-btn>

        <v-btn depressed color="warning" :disabled="!valid" class="ml-2" @click="save()">
          {{ buttonTitle }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <currency-form-input
        v-for="field in $options.VISIBLE_FIELDS"
        :key="field"
        v-model="currency[field]"
        :field="field"
        :placeholder="placeholders[field]"
        :rules="ruleCurrencyName"
      />
    </v-row>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { CURRENCY_CODE_LENGTH } from '@/constants/constants';
import { EMPTY_CURRENCY, VISIBLE_FIELDS } from '@/helpers/currency';
import CurrencyFormInput from '@/components/currency-form/CurrencyFormInput';
import IconClose from '@/components/icons/actions/IconClose';

export default {
  components: {
    CurrencyFormInput,
    IconClose
  },

  VISIBLE_FIELDS,

  data: () => ({
    valid: false,
    ruleCurrencyName: [
      v => !!v || 'Please enter a name'
    ],
    ruleCurrencyCode: [
      v => !!v || 'Please enter a code',
      v => v.length <= CURRENCY_CODE_LENGTH || 'Code must have 3 characters'
    ],
    ruleCurrencySymbol: [
      v => !!v || 'Please enter a symbol'
    ],
    currency: Object.assign({}, EMPTY_CURRENCY),
    placeholders: {
      name: 'Add name',
      code: 'e.g. USD',
      symbol: 'Add symbol'
    }
  }),

  computed: {
    ...mapGetters({
      currencies: 'currencies/getCurrencies'
    }),

    paramsCode() {
      return this.$route.params.code;
    },

    isEdit() {
      return !!this.paramsCode;
    },

    title() {
      return this.isEdit ? 'Edit Currency' : 'Add currency';
    },

    buttonTitle() {
      return this.isEdit ? 'Save' : 'Add';
    }
  },

  watch: {
    paramsCode: {
      immediate: true,
      handler: 'setInitialCurrency'
    }
  },

  methods: {
    ...mapActions({
      addCurrency: 'currencies/add',
      updateCurrency: 'currencies/update'
    }),

    save() {
      this.isEdit ? this.updateExistingCurrency() : this.addNewCurrency();
    },

    addNewCurrency() {
      const exists = !!this.currencies.find(({ code }) => code.toLowerCase() === this.currency.code.toLowerCase());
      if (exists) {
        return;
      }

      this.addCurrency(this.currency);
      this.returnToCurrencies();
    },

    updateExistingCurrency() {
      this.updateCurrency({ code: this.paramsCode, currency: this.currency });
      this.returnToCurrencies();
    },

    returnToCurrencies() {
      this.$router.push({ path: '/currencies' });
    },

    setInitialCurrency() {
      if (!this.paramsCode) {
        return;
      }

      const currency = this.currencies.find(({ code }) => code === this.paramsCode);
      if (!currency) {
        return;
      }

      this.currency = Object.assign({}, currency);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/mixins/_text.scss';

.currency-form {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: -36px;
    left: -12px;
    width: 1px;
    background: rgba(0, 0, 0, 0.15);
  }
}

.currency-form__header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.currency-form__title {
  @include basic-text($font-weight-bold, 17px, -0.408px);
}
</style>
