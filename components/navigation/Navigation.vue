<template>
  <v-navigation-drawer
    fixed
    app
    permanent
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
      >
        <v-list-item-action>
          <navigation-icon :alt="item.title" :src="item.src" />
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="text-capitalize">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import NavigationIcon from '@/components/icons/navigation/Icon';
const PAGES = ['analytics', 'offers', 'loyalty', 'currencies', 'dispatch', 'configuration'];

export default {
  name: 'MainNavigation',
  components: {
    NavigationIcon
  },
  data() {
    return {
      items: PAGES.map(page => ({
        src: `/navigation/icon-${page}.svg`,
        title: page,
        to: `/${page}`
      }))
    };
  }
};
</script>
