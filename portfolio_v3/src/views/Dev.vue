<template>
  <div id="wrapper-dev">
    <Title />
    <div id="cont-dev">
      <div id="slider">
        <vue-carousel :data="data" indicator-type="disc"></vue-carousel>
      </div>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'

export default {
  name: 'DevWeb',
  components: {
    Title,
  },
  data() {
    return {
      data: [

        '<div id="PLM"></div><div class="circle-info"><fa :icon="[\'fas\', \'mouse-pointer\']"/></div>',
        '<div id="OnlineBIO"></div><div class="circle-info"><fa :icon="[\'fas\', \'mouse-pointer\']"/></div>',
        '<div id="Archlabs"></div><div class="circle-info"><fa :icon="[\'fas\', \'mouse-pointer\']"/></div>',
        '<div id="Tinker"></div><div class="circle-info"><fa :icon="[\'fas\', \'mouse-pointer\']"/></div>',
      ],
    };
  },
  mounted(){
    const navBar = document.getElementById("nav")
    const btnBurger = document.getElementById("cont-btn-burger")

    navBar.classList.remove("isOpen");
    btnBurger.classList.remove("is-opened");
  }
}
</script>

<style lang="scss">
@import "../style/style.module.scss";

#wrapper-dev{
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;

  #cont-dev{
    width: 1152px;
    height: 93%;
    margin:  0 auto;
    @extend %shadowL;
    @extend %glass;

    #slider{
      width: 92%;
      height: 100%;
      border-radius: 15px;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      -ms-border-radius: 15px;
      -o-border-radius: 15px;
      overflow: hidden;
      margin: 3rem 3rem 2rem;
      height: calc(100% - 5rem);

      .vue-carousel__indicator{
        margin-right: .4rem;
        margin-left: .4rem;
      }

      .vue-carousel__indicators--disc>.vue-carousel__indicator:before{
        height: .8rem;
        width: .8rem;
      }

      .vue-carousel__control{
        width: 3rem;
        height: 3rem;
      }

      .vue-carousel--controls>.vue-carousel__control--prev{
        transform: translateX(-30%);
      }

      .vue-carousel--controls>.vue-carousel__control--next{
        transform: translateX(30%);
      }

      div{
        width: 100%;
        height: 100%;
        background-position: center;
      }
      
      .test{
        background-color: crimson;
        width: 100px;
        height: 100px;
      }

      .circle-info{
        box-shadow: none;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        -ms-border-radius: 15px;
        -o-border-radius: 15px;
        background-color: $redL;
        clip-path: circle(5% at 95% 10%);
        transition: all 1s ease-in-out;
        -webkit-transition: all 1s ease-in-out;
        -moz-transition: all 1s ease-in-out;
        -ms-transition: all 1s ease-in-out;
        -o-transition: all 1s ease-in-out;
        

        &:hover{
          clip-path: circle(150% at 95% 10%);
          background-color: $sky;
        }

        svg{
          font-size: 2rem;
          position: relative;
          top: 7.5%;
          left: 94.3%;
        }
        

      }

      #PLM{
        height: 657px;
        background-image: url(../assets/img/dev_web/PLM.png);
      }

      #OnlineBIO{
        height: 657px;
        background-image: url(../assets/img/dev_web/Online_BIO.png);
      }

      #Archlabs{
        height: 657px;
        background-image: url(../assets/img/dev_web/ArchWeb.png);
      }

      #Tinker{
        height: 657px;
        background-image: url(../assets/img/dev_web/TinkerWeb.png);
      }
    }
  }

}

@media #{$md}{
  #wrapper-dev{
    align-items: flex-start;

    #cont-dev{
      height: 96%;

      #slider{
        margin: 1rem;
        height: calc(100% - 2rem);
      }
    }
  }
}

</style>