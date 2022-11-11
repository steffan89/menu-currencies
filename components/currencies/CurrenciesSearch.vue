<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="currency-search">
      <v-text-field
        v-model="term"
        placeholder="Search"
        class="currency-search__input"
        outlined
      >
        <template #append>
          <icon-search />
        </template>
      </v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import IconSearch from '@/components/icons/actions/IconSearch';

export default {
  components: {
    IconSearch
  },

  computed: {
    ...mapGetters({
      searchTerm: 'currencies/getSearchTerm'
    }),

    term: {
      set(value) {
        this.$store.commit('currencies/setSearchTerm', value);
      },
      get() {
        return this.searchTerm;
      }
    }
  }
};
</script>

<style lang="scss">
.currency-search {
  margin-bottom: 20px;

  .currency-search__input {
    max-width: 300px;

    .v-input__slot {
      margin-bottom: 0;
      position: relative;

      .v-input__append-inner {
        position: absolute;
        left: 6px;
        margin-top: 10px;
      }
    }

    .v-text-field__slot {
      padding-left: 20px;
      padding-top: 1px;
    }

    .v-text-field__details {
      display: none;
    }
  }
}
</style>
