<template>
  <v-row class="fill-height">
    <v-col cols="8">
      <currencies />
    </v-col>
    <v-col cols="4">
      <currency-form />
    </v-col>
  </v-row>
</template>

<script>
import Currencies from '@/components/currencies/Currencies';
import CurrencyForm from '@/components/currency-form/CurrencyForm';
export default {
  name: 'AddCurrency',

  components: {
    Currencies,
    CurrencyForm
  }
};
</script>
