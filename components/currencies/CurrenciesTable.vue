<template>
  <v-simple-table>
    <template #default>
      <thead>
        <tr>
          <th
            v-for="field in $options.VISIBLE_FIELDS"
            :key="field"
            class="text-left text-uppercase"
          >
            Currency {{ field }}
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        <currencies-table-empty v-if="noCurrencies" />
        <currencies-table-row
          v-for="currency in currencies"
          :key="currency.id"
          :currency="currency"
        />
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters } from 'vuex';
import CurrenciesTableEmpty from './CurrenciesTableEmpty';
import CurrenciesTableRow from './CurrenciesTableRow';
import { VISIBLE_FIELDS } from '@/helpers/currency';
import { LS_KEY_CURRENCIES } from '@/constants/constants';

export default {
  components: {
    CurrenciesTableEmpty,
    CurrenciesTableRow
  },

  VISIBLE_FIELDS,

  computed: {
    ...mapGetters({
      currencies: 'currencies/getFilteredCurrencies'
    }),

    noCurrencies() {
      return !this.currencies.length;
    }
  },

  watch: {
    currencies() {
      localStorage.setItem(LS_KEY_CURRENCIES, JSON.stringify(this.currencies));
    }
  },

  created() {
    const currencies = localStorage.getItem(LS_KEY_CURRENCIES);
    currencies && this.$store.commit('currencies/setCurrencies', JSON.parse(currencies));
  }
};
</script>

<style lang="scss">
.theme--light.v-data-table > .v-data-table__wrapper {
  table {
    thead {
      th {
        font-size: 11px;
        font-weight: $font-weight-semibold;
        letter-spacing: 0.066px;
        height: auto;
        padding-bottom: 10px;

        &:first-child {
          padding-left: 0;
        }
      }
    }

    tbody {
      tr {
        &:hover {
          &:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
            background-color: rgba(0, 0, 0, 0.03);
          }
        }

        &.currency__table-row--selected {
          background-color: rgba(0, 0, 0, 0.03);
        }

        td {
          padding-top: 8px;
          padding-bottom: 8px;
          height: auto;

          &:first-child {
            padding-left: 0;
            font-weight: $font-weight-semibold;
          }
        }
      }
    }
  }
}
</style>
