<!--<template>-->
<!--  <tr :class="{ 'currency__table-row&#45;&#45;selected': isSelected }" @click="selectCurrency">-->
<!--    <td>{{ currency.name }}</td>-->
<!--    <td>{{ currency.code }}</td>-->
<!--    <td>{{ currency.symbol }}</td>-->
<!--    <td class="text-right">-->
<!--      <a @click="deleteCurrency">-->
<!--        <icon-delete />-->
<!--      </a>-->
<!--    </td>-->
<!--  </tr>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import Vue, { PropOptions } from 'vue';-->

<!--interface Currency {-->
<!--  id: number,-->
<!--  name: string,-->
<!--  code: string,-->
<!--  symbol: string-->
<!--}-->

<!--export default Vue.extend({-->
<!--  components: {-->
<!--    IconDelete: () => '@/components/icons/actions/IconDelete'-->
<!--  },-->

<!--  props: {-->
<!--    currency: {-->
<!--      type: Object,-->
<!--      required: true-->
<!--    } as PropOptions<Currency>-->
<!--  },-->

<!--  computed: {-->
<!--    paramsCode(): string {-->
<!--      return this.$route.params.code;-->
<!--    },-->

<!--    isSelected(): boolean {-->
<!--      return this.paramsCode === this.currency.code;-->
<!--    }-->
<!--  },-->

<!--  methods: {-->
<!--    selectCurrency(): void {-->
<!--      this.$router.push({ path: `/currencies/edit/${this.currency.code}` });-->
<!--    },-->

<!--    deleteCurrency(): void {-->
<!--      this.$store.dispatch('currencies/remove', this.currency);-->
<!--    }-->
<!--  }-->
<!--});-->
<!--</script>-->
