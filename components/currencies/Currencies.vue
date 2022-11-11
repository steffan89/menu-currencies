<template>
  <div class="pa-8">
    <currencies-header />
    <currencies-search />
    <currencies-table />
  </div>
</template>

<script>
import CurrenciesHeader from '@/components/currencies/CurrenciesHeader';
import CurrenciesSearch from '@/components/currencies/CurrenciesSearch';
import CurrenciesTable from '@/components/currencies/CurrenciesTable';

export default {
  name: 'CurrenciesList',

  components: {
    CurrenciesHeader,
    CurrenciesSearch,
    CurrenciesTable
  }
};
</script>
