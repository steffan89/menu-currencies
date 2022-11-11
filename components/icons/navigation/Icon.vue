<template>
  <img
    :alt="alt"
    :src="src"
  >
</template>

<script>
export default {
  name: 'NavigationIcon',
  props: {
    alt: {
      type: String,
      required: false,
      default: 'Icon'
    },
    src: {
      type: String,
      required: true
    }
  }
};
</script>
