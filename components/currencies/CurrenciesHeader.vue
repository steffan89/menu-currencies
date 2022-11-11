<template>
  <v-row justify="center" align="center">
    <v-col cols="9">
      <span class="d-block page-title">Currencies</span>
    </v-col>
    <v-col cols="3" class="text-right">
      <v-btn depressed color="warning" to="/currencies/add">
        <icon-plus class="mr-1" /> Add currency
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import IconPlus from '@/components/icons/actions/IconPlus';

export default {
  components: {
    IconPlus
  }
};
</script>

<style lang="scss" scoped>
.page-title {
  color: $text-color;
  font-weight: $font-weight-bold;
  font-size: 2 * $font-size-primary;
  line-height: $secondary-line-height;
  letter-spacing: 0.364px;
}
</style>
