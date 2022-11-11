<template>
  <tr
    :class="{ 'currency__table-row--selected': isSelected }"
    @click="selectCurrency"
  >
    <td
      v-for="field in $options.VISIBLE_FIELDS"
      :key="field"
    >
      {{ currency[field] }}
    </td>
    <td class="text-right">
      <a @click="deleteCurrency">
        <icon-delete />
      </a>
    </td>
  </tr>
</template>

<script>
import IconDelete from '@/components/icons/actions/IconDelete';
import { VISIBLE_FIELDS } from '@/helpers/currency';

export default {
  components: {
    IconDelete
  },

  props: {
    currency: {
      type: Object,
      required: true
    }
  },

  VISIBLE_FIELDS,

  computed: {
    paramsCode() {
      return this.$route.params.code;
    },

    isSelected() {
      return this.paramsCode === this.currency.code;
    }
  },

  methods: {
    selectCurrency() {
      this.$router.push({ path: `/currencies/edit/${this.currency.code}` });
    },

    deleteCurrency() {
      this.$store.dispatch('currencies/remove', this.currency);
    }
  }
};
</script>
