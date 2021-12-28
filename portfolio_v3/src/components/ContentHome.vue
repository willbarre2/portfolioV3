<template>
  <h1>William-Barré<span> .com</span></h1>
  <div id="text-home">
    <p>" Choisissez un travail que vous aimez</p>
    <p> et vous n'aurez pas à travailler un seul jour de votre vie. "</p>
    <span>Confucius</span>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../style/style.module.scss";

h1{
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

#text-home{
  font-family: "JoseI", Avenir, Helvetica, Arial, sans-serif;
  color: $skyT;
  font-size: 1.2rem;
  margin: 3rem 0 0 6rem;
  width: 750px;
  display: flex;
  flex-direction: column;
  p:nth-child(2){
    margin-top: 1rem;
    align-self: flex-end;
  }
  span{
    align-self: flex-end;
    margin-top: 1rem;
    font-size: .9rem;
  }
}

#laptop{
  width: 480px;
  height: 270px;
}

@media #{$xxl}{
  h1{
    font-size: 9rem;
    
    span{
      font-size: 5rem;
    }
  }

  #text-home{
    font-size: 1rem;
    width: 600px;
    p:nth-child(2){
      margin-top: .8rem;
    }
    span{
      margin-top: .8rem;
      font-size: .8rem;
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

  #text-home{
    font-size: .9rem;
    margin: 3rem 0 0 6rem;
    width: 500px;
    p:nth-child(2){
      margin-top: .8rem;
    }
    span{
      margin-top: .8rem;
      font-size: .7rem;
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

  #text-home{
    color: $sky;
    font-size: .8rem;
    margin: 3rem 0;
    width: 450px;
    p:nth-child(2){
      margin-top: .6rem;
    }
    span{
      margin-top: .6rem;
      font-size: .6rem;
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

  #text-home{
    width: 400px;
    margin-bottom: 10rem;
  }
}

@media #{$xs}{
  h1{
    font-size: 3rem;

    span{
      font-size: 2rem;
    }
  }
  #text-home{
    font-size: .7rem;
    margin-top: 2rem;
    width: 310px;
    p:nth-child(2){
      margin-top: .5rem;
    }
    span{
      margin-top: .5rem;
    }
  }
}

@media #{$xxs}{
  #text-home{
    margin-top: 1rem;
    width: 95%;
    font-size: .6rem;
    p:nth-child(2){
      margin-top: .5rem;
    }
    span{
      margin-top: .5rem;
    }
  }
}

</style>