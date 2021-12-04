<template>
  <div id="home-cont">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ContentHome />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentHome from '@/components/ContentHome.vue'

export default {
  name: 'Home',
  components: {
    ContentHome
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

#home-cont{
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
