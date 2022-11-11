<template>
  <v-app light>
    <top-bar />

    <v-main>
      <navigation />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/navigation/Navigation';
import TopBar from '@/components/navigation/TopBar';

export default {
  name: 'DefaultLayout',
  components: {
    Navigation,
    TopBar
  }
};
</script>
