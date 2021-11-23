<template>
  <Title />
  <div id="cont-CV">
    <img src="../assets/img/CV_web3.png" alt="CV" id="cv">
  </div>
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

#cont-CV{
  width: 90vw;
  height: 85vh;
  margin: auto;
  @extend %shadowL;
  @extend %glass;

  #cv{
    width: 500px;
  }
}

</style>