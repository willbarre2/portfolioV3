<template>
  <h1>William-Barré<span> .fr</span></h1>
  <div id="text-home">
    <p>" Choisissez un travail que vous aimez</p>
    <p> et vous n'aurez pas à travailler un seul jour de votre vie. "</p>
    <span>Confucius</span>
  </div>
  <div class="zepline" id="zep"></div>
</template>

<script>

export default {
  mounted(){
    const zepline = document.getElementById("zep")

    setTimeout(() => {
      zepline.classList.add("anim");
      setInterval(() =>{
        zepline.classList.toggle("anim");
      }, 32000)
    }, 5)
    
  }
}

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
  mix-blend-mode: luminosity;

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

.zepline{
  background-image: url(../assets/img/balloon.png);
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: -1;
  width: 300px;
  height: 300px;
  transform: translate(-370%, 3rem);
  transition: all 30s linear;
  -webkit-transition: all 30s linear;
  -moz-transition: all 30s linear;
  -ms-transition: all 30s linear;
  -o-transition: all 30s linear;
}

.anim{
  transform: translate(370%, -12rem);
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

  .zepline{
    transform: translate(-300%, 3rem);
  }

  .anim{
    transform: translate(300%, -9rem);
  }
}

@media #{$xl}{
  .zepline{
    transform: translate(-250%, 3rem);
  }

  .anim{
    transform: translate(250%, -9rem);
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

  .zepline{
    transform: translate(-200%, 3rem);
  }

  .anim{
    transform: translate(200%, -9rem);
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

  .zepline{
    width: 150px;
    height: 150px;
    transform: translate(-300%, 3rem);
  }

  .anim{
    transform: translate(300%, -9rem);
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

  .zepline{
    width: 100px;
    height: 100px;
    transform: translate(-320%, -3rem);
  }

  .anim{
    transform: translate(320%, -9rem);
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

  .zepline{
    width: 75px;
    height: 75px;
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