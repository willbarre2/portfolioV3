<template>
  <h1>William-Barré<span> .com</span></h1>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../style/style.module.scss";

h1{
  position: absolute;
  z-index: 1;
  font-size: 12rem;
  font-weight: normal;
  font-family: "England";
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
    
    span{
      font-size: 5rem;
    }
  }
}

@media #{$lg}{
  h1{
    font-size: 7rem;

    span{
      font-size: 4rem;
    }
  }
}

@media #{$md}{
  h1{
    font-size: 5rem;

    span{
      font-size: 3rem;
    }
  }
}

@media #{$sm}{
  h1{
    font-size: 4rem;

    span{
      font-size: 2.5rem;
    }
  }
}

@media #{$xs}{
  h1{
    font-size: 3rem;

    span{
      font-size: 2rem;
    }
  }
}

</style>