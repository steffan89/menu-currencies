<template>
  <v-app-bar
    fixed
    app
    flat
  >
    <span class="app-bar__avatar">A</span>
    <div class="d-flex flex-column">
      <span class="app-bar__brand-label">Brand Name</span>
      <span class="app-bar__brand-name">All Stores</span>
    </div>
    <v-spacer />
    <icon-alert class="mr-1" />
    <icon-user />
  </v-app-bar>
</template>

<script>
import IconAlert from '@/components/icons/top-bar/IconAlert';
import IconUser from '@/components/icons/top-bar/IconUser';

export default {
  name: 'TopBar',
  components: {
    IconAlert,
    IconUser
  }
};
</script>

<style scoped lang="scss">
@import '~assets/mixins/_text.scss';

.v-app-bar {
  background-color: white !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15) !important;
  left: 0 !important;
}

.app-bar__avatar {
  background-color: $primary-color;
  border-radius: 50%;
  color: white;
  display: block;
  font-size: 17px;
  font-weight: $font-weight-semibold;
  line-height: $secondary-line-height;
  height: $avatar-size;
  width: $avatar-size;
  margin-right: 10px;
  text-align: center;
}

.app-bar__brand-label {
  color: $secondary-color;
  font-size: 11px;
  font-weight: $font-weight-semibold;
  letter-spacing: 0.066px;
  text-transform: uppercase;
}

.app-bar__brand-name {
  @include basic-text($font-weight-bold, $font-size-primary, $letter-spacing-primary);
}
</style>
