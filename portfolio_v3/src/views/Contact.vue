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
  },
  mounted(){
    const navBar = document.getElementById("nav")
    const btnBurger = document.getElementById("cont-btn-burger")

    navBar.classList.remove("isOpen");
    btnBurger.classList.remove("is-opened");
  }
}
</script>

<style lang="scss" scoped>
@import "../style/style.module.scss";



</style>