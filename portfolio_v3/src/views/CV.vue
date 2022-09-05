<template>
  <div id="wrapper-CV">
    <Title />
    <div id="cont-CV">
      <a :href="`${publicPath}CV_sep_2022.pdf`" target="_blank" id="textCV">Téléchargez le ici<fa :icon="['fas', 'file-download']"/></a>
      <a :href="`${publicPath}CV_sep_2022.pdf`" target="_blank" id="imgCV">
        <img src="../assets/img/CV_sep_2022_small.png" alt="CV" id="cv">
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'

export default {
  name: 'CV',
  components: {
    Title
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
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

#wrapper-CV{
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
}

#cont-CV{
  width: 600px;
  height: 775px;
  margin:  0 auto 1rem;
  @extend %shadowL;
  @extend %glass;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  #textCV{
    color: $blueCD;
    font-family: "Jose", Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.3rem;
    @extend %hover;
    &:hover{
      color: $blueC;
    }

    svg{
      margin-left: .5rem;
    }
  }

  #imgCV{
    height: 85%;
  }

  #cv{
    height: 100%;
    @extend %animate;
    @extend %hoverL;

    &:hover{
      cursor: zoom-in;
    }
  }
}

@media #{$md}{

  #wrapper-CV{
    height: calc(100vh - 120px);
  }
  #cont-CV{
    width: 500px;
    height: 600px;
  }
}

@media #{$sm}{
  #cont-CV{
    width: 400px;
    height: 500px;
  }
}

@media #{$xs}{
  #wrapper-CV{
    align-items: start;
  }
  #cont-CV{
    width: 310px;
    height: 450px;
  }
}

@media #{$xxs}{
  
  #cont-CV{
    width: 275px;
    height: 400px;
  }
}
</style>