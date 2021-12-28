<template>
  <div id="wrapper-dev">
    <Title />
    <div id="cont-dev">
      <div id="slider">
        <Flicking :options="{ align: 'prev', panelsPerView: 1, circular: true }">
          <div class="panel">
            <div id="PLM1" class="img1"></div>
            <div id="PLM2" class="img2"></div>
            <div id="PLM3" class="img3"></div>
            <div id="PLM4" class="img4"></div>
            <div class="circle-info"></div>
          </div>
          <div class="panel">
            <div id="OnlineBIO1" class="img1"></div>
            <div id="OnlineBIO2" class="img2"></div>
            <div id="OnlineBIO3" class="img3"></div>
            <div id="OnlineBIO4" class="img4"></div>
            <div class="circle-info"></div>
          </div>
          <div class="panel">
            <div id="Archlabs1" class="img1"></div>
            <div id="Archlabs2" class="img2"></div>
            <div id="Archlabs3" class="img3"></div>
            <div id="Archlabs4" class="img4"></div>
            <div class="circle-info"></div>
          </div>
          <div class="panel">
            <div id="Tinker1" class="img1"></div>
            <div id="Tinker2" class="img2"></div>
            <div id="Tinker3" class="img3"></div>
            <div id="Tinker4" class="img4"></div>
            <div class="circle-info"></div>
          </div>
        </Flicking>
      </div>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'


export default {
  name: 'Home',
  components: {
    Title,
  },
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
@import "../style/style.module.scss";

#wrapper-dev{
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;

  #cont-dev{
    width: 90%;
    height: 93%;
    margin:  0 auto;
    @extend %shadowL;
    @extend %glass;

    #slider{
      margin: 3rem;
      height: calc(100% - 6rem);

      .flicking-viewport{
        height: 100%;
      }


      .panel{
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        -ms-border-radius: 15px;
        -o-border-radius: 15px;

        div{
          width: 600px;
          height: 400px;
          background-size: cover;
          position: relative;
        }

        .circle-info{
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
        }

        .img1{
          top: 0;
          left: 0;
        }

        .img2{
          top: -58%;
          left: 43%;
        }

        .img3{
          top: -86%;
          left: 15%;
        }

        .img4{
          top: -144%;
          left: 64%;
        }

        #PLM1{
          background-image: url(../assets/img/dev_web/PLM1.png);
        }

        #PLM2{
          background-image: url(../assets/img/dev_web/PLM2.png);
        }

        #PLM3{
          background-image: url(../assets/img/dev_web/PLM3.png);

        }

        #PLM4{
          background-image: url(../assets/img/dev_web/PLM4.png);
        }

        #OnlineBIO1{
          background-image: url(../assets/img/dev_web/Online_BIO1.png);
        }

        #OnlineBIO2{
          background-image: url(../assets/img/dev_web/Online_BIO2.png);
        }

        #OnlineBIO3{
          background-image: url(../assets/img/dev_web/Online_BIO3.png);

        }

        #OnlineBIO4{
          background-image: url(../assets/img/dev_web/Online_BIO4.png);
        }

        #Archlabs1{
          background-image: url(../assets/img/dev_web/ArchWeb1.png);
        }

        #Archlabs2{
          background-image: url(../assets/img/dev_web/ArchWeb2.png);
        }

        #Archlabs3{
          background-image: url(../assets/img/dev_web/ArchWeb3.png);
        }

        #Archlabs4{
          background-image: url(../assets/img/dev_web/ArchWeb4.png);
        }

        #Tinker1{
          background-image: url(../assets/img/dev_web/TinkerWeb1.png);
        }

        #Tinker2{
          background-image: url(../assets/img/dev_web/TinkerWeb2.png);
        }

        #Tinker3{
          background-image: url(../assets/img/dev_web/TinkerWeb3.png);
        }

        #Tinker4{
          background-image: url(../assets/img/dev_web/TinkerWeb4.png);
        }
      }
    }
  }

}

@media #{$xxl}{
  #wrapper-dev{

    #cont-dev{

      #slider{
        .panel{
          div{
            width: 450px;
            height: 300px;
          }

          .img2{
            top: -43%;
            left: 51%;
          }

          .img3{
            top: -39%;
            left: 7%;
          }

          .img4{
            top: -83%;
            left: 61%;
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

        .panel{

          .img2{
            top: -26%;
            left: 31%;
          }

          .img3{
            top: -33%;
            left: 0;
          }

          .img4{
            top: -61%;
            left: 31%;
          }
        }
      }
    }
  }
}

</style>