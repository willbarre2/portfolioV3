<template>
    <h1>William-Barré<span> .com</span></h1>
  
</template>

<script>
// @ is an alias to /src
// import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
@import "../style/style.module.scss";

h1{
  font-size: 6rem;
  font-weight: normal;
  font-family: "England";
  position: absolute;
  top: 0;
  left: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $blueCD;

  span{
    font-size: 3rem;
  }
}

@media #{$xxl}{
  h1{
    font-size: 4rem;

    span{
      font-size: 2rem;
    }
  }
}


</style>