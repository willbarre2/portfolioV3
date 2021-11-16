<template>
  <h1>William - Barré<span> .com</span></h1>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../style/style.module.scss";

h1{
  font-size: 12rem;
  font-weight: normal;
  font-family: "England";
  margin-top: 10rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $blueCD;

  span{
    font-size: 6rem;
  }
}

@media #{$xxl}{
  h1{
    font-size: 9rem;
    margin-top: 8rem;


    span{
      font-size: 5rem;
    }
  }
}

</style>