<template>
  <Title />
  
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
@import "../style/style.module.scss";



</style>