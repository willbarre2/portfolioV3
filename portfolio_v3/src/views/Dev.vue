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
        background-color: $roseC;
      }

      .vue-carousel__control{
        width: 3rem;
        height: 3rem;
        background-color: $blueC;
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
        overflow: hidden;
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
        clip-path: circle(4% at 95% 10%);
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
        background-repeat: no-repeat;
        background-position: top;
      }

      #OnlineBIO{
        height: 657px;
        background-image: url(../assets/img/dev_web/Online_BIO.png);
        background-repeat: no-repeat;
        background-position: top;
      }

      #Archlabs{
        height: 657px;
        background-image: url(../assets/img/dev_web/ArchWeb.png);
        background-repeat: no-repeat;
        background-position: top;
      }

      #Tinker{
        height: 657px;
        background-image: url(../assets/img/dev_web/TinkerWeb.png);
        background-repeat: no-repeat;
        background-position: top;
      }
    }
  }

}

@media #{$xl}{
  #wrapper-dev{
    #cont-dev{
      width: 95%;

      #slider{
        .circle-info{
          clip-path: circle(30px at 90% 10%);
          svg{
            font-size: 1.5rem;
            top: 8.3%;
            left: 89.6%;
          }
        }
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

        .vue-carousel__indicator{
          margin-right: .2rem;
          margin-bottom: 0;
          margin-left: .2rem;
        }

        .vue-carousel__indicators--disc>.vue-carousel__indicator:before{
          height: .6rem;
          width: .6rem;
          background-color: $blueCD;
        }

        #PLM{
          height: 850px;
          background-image: url(../assets/img/dev_web/PLMmd.png);
        }

        #OnlineBIO{
          height: 850px;
          background-image: url(../assets/img/dev_web/Online_BIOmd.png);
        }

        #Archlabs{
          height: 850px;
          background-image: url(../assets/img/dev_web/ArchWebmd.png);
        }

        #Tinker{
          height: 850px;
          background-image: url(../assets/img/dev_web/TinkerWebmd.png);
        }

        .circle-info{
          clip-path: circle(25px at 85% 10%);
          svg{
            font-size: 1.2rem;
            top: 8.9%;
            left: 84.7%;
          }
        }
      }
    }
  }
}

@media #{$sm}{
  #wrapper-dev{
    #cont-dev{
      #slider{

        #PLM{
          height: 648px;
          background-image: url(../assets/img/dev_web/PLMsm.png);
        }

        #OnlineBIO{
          height: 648px;
          background-image: url(../assets/img/dev_web/Online_BIOsm.png);
        }

        #Archlabs{
          height: 648px;
          background-image: url(../assets/img/dev_web/ArchWebsm.png);
        }

        #Tinker{
          height: 648px;
          background-image: url(../assets/img/dev_web/TinkerWebsm.png);
        }

        .circle-info{
          clip-path: circle(25px at 85% 10%);
          svg{
            font-size: 1.2rem;
            top: 8.7%;
            left: 84.5%;
          }
        }
      }
    }
  }
}

@media #{$xs}{
  #wrapper-dev{
    #cont-dev{
      #slider{

        #PLM{
          height: 600px;
          background-image: url(../assets/img/dev_web/PLMxs.png);
        }

        #OnlineBIO{
          height: 600px;
          background-image: url(../assets/img/dev_web/Online_BIOxs.png);
        }

        #Archlabs{
          height: 600px;
          background-image: url(../assets/img/dev_web/ArchWebxs.png);
        }

        #Tinker{
          height: 600px;
          background-image: url(../assets/img/dev_web/TinkerWebxs.png);
        }

        .circle-info{
          svg{
            top: 8.5%;
            left: 83.7%;
          }
        }
      }
    }
  }
}
</style>