<template>
  <div id="wrapper-dev">
    <Title />
    <div id="cont-dev">
      <div id="slider">
        <swiper :slides-per-view="1" :loop="true" :pagination='{ "clickable": true }' :navigation="true" class="mySwiper">
          <!-- PLM -->
          <swiper-slide>
            <div id="PLM"></div>
            <fa :icon="['fas', 'mouse-pointer']"/>
            <div class="circle-info">
              <h2>Portail des services Numériques Mathrice</h2>
              <p>Projet réalisé pour l'Institut de Mathématique de Bordeaux (CNRS).
              <br> Portail permettant d'accéder aux différents services de la Plateforme en Ligne pour les Mathématiques (web conférences, espaces de stockage et de partage de fichiers, éditions en ligne, messageries instantanées, …).
              <br> Il permet aussi la gestion de son compte par l'intermédiaire d'une page d'édition de profil, une modale et une page de réinitialisation de mot de passe.
              <br> Une interface permet d'inviter une personne à pouvoir utiliser les services, lui créer un compte.
              <br> Enfin une interface permet de gérer les unités/laboratoires, ainsi que les comptes qui lui sont rattachés.
              <br>Ce projet nécessite un mock-up d'API pour tourner en local.</p>
              <h3>Technos :</h3>
              <div class="logos-technos">
                <fa class="vuejs-logo" title="Vue.JS 3" :icon="['fab', 'vuejs']"/>
                <fa class="sass-logo" :icon="['fab', 'sass']"/>
                <fa class="nodejs-logo" :icon="['fab', 'node']"/>
              </div>
              <div class="btns-devweb">
                <a class="btn" href="https://vuejs-debug-plm-services.apps.math.cnrs.fr/">Voir le site</a>
                <a class="btn" href="https://github.com/willbarre2/PLMServiciesVue">Github Front</a>
                <a class="btn" href="https://github.com/willbarre2/PLMServicesMockUp">Github Mock-Up</a>
              </div>
            </div>
          
          
          </swiper-slide>
          <!-- Online Bio -->
          <swiper-slide>
            <div id="OnlineBIO"></div>
            <fa :icon="['fas', 'mouse-pointer']"/>
            <div class="circle-info">
              <h2>Online BIO</h2>
              <p>1ère place au hackathon du 19 au 22 avril 2021, organisé par le campus du lac (CCI Gironde).
              <br>Il fallait faire le site vitrine d'un primeur bio. J'étais chef de projet et Git master.
              </p>
              <h3>Technos :</h3>
              <div class="logos-technos">
                <fa class="html-logo" :icon="['fab', 'html5']"/>
                <fa class="css-logo" :icon="['fab', 'css3-alt']"/>
                <fa class="js-logo" :icon="['fab', 'js-square']"/>
              </div>
              <div class="btns-devweb">
                <a class="btn" href="https://willbarre2.github.io/hackathon/">Voir le site</a>
                <a class="btn" href="https://github.com/willbarre2/hackathon">Github</a>
              </div>
            </div>
          
          </swiper-slide>
          <!-- My Cave -->
          <swiper-slide>
            <div id="MyCave"></div>
            <fa :icon="['fas', 'mouse-pointer']"/>
            <div class="circle-info">
              <h2>My Cave</h2>
              <p>Application de gestion de cave à vin en ligne.
              <br>Projet réalisé en cours de formation.
              <br>Vous pouvez essayer une version de test de cette application avec le lien ci-dessous et les codes :
              <br>Identifiant : admin
              <br>Mot de passe : AdminAdmin22</p>
              <h3>Technos :</h3>
              <div class="logos-technos">
                <fa class="php-logo" :icon="['fab', 'php']"/>
                <p id="my-sql">My<span>SQL</span></p>
                <fa class="sass-logo" :icon="['fab', 'sass']"/>
                <fa class="nodejs-logo" :icon="['fab', 'node']"/>
              </div>
              <div class="btns-devweb">
                <a class="btn" href="https://mycavewb.com/index.php">Voir le site</a>
                <a class="btn" href="https://github.com/willbarre2/myCave">Github</a>
              </div>
            </div>
          </swiper-slide>
          <!-- ArchLabs -->
          <swiper-slide>
            <div id="Archlabs"></div>
            <fa :icon="['fas', 'mouse-pointer']"/>
            <div class="circle-info">
              <h2>ARCLABS</h2>
              <p>Mise en Pratique de Bootstrap à partir d'une maquette fournis.</p>
              <h3>Technos :</h3>
              <div class="logos-technos">
                <fa class="bootstrap-logo" :icon="['fab', 'bootstrap']"/>
                <fa class="html-logo" :icon="['fab', 'html5']"/>
                <fa class="css-logo" :icon="['fab', 'css3-alt']"/>
              </div>
              <div class="btns-devweb">
                <a class="btn" href="https://willbarre2.github.io/archFuture/">Voir le site</a>
                <a class="btn" href="https://github.com/willbarre2/archFuture">Github</a>
              </div>
            </div>
          </swiper-slide>
          <!-- Tinker -->
          <swiper-slide>
            <div id="Tinker"></div>
            <fa :icon="['fas', 'mouse-pointer']"/>
            <div class="circle-info">
              <h2>TINKER</h2>
              <p>Mise en Pratique de Bootstrap et Sass à partir d'une maquette fournis.</p>
              <h3>Technos :</h3>
              <div class="logos-technos">
                <fa class="bootstrap-logo" :icon="['fab', 'bootstrap']"/>
                <fa class="html-logo" :icon="['fab', 'html5']"/>
                <fa class="sass-logo" :icon="['fab', 'sass']"/>
              </div>
              <div class="btns-devweb">
                <a class="btn" href="https://willbarre2.github.io/Tinker/">Voir le site</a>
                <a class="btn" href="https://github.com/willbarre2/Tinker">Github</a>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';

import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination,Navigation]);

export default {
  name: 'DevWeb',
  components: {
    Title,
    Swiper,
    SwiperSlide,
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
      height: calc(100% - 6rem);

      .swiper {
        width: 100%;
        height: 100%;
      }

      .swiper-pagination{
        bottom: 0rem;
      }

      .swiper-pagination-bullet{
        background-color: $roseC;
        border: 2px solid $purpleC;
        width: 15px;
        height: 15px;
        margin: 0 7px;
      }

      .swiper-pagination-bullet-active{
        background-color: $roseCD;
      }

      &:hover{
        .swiper-button-next, .swiper-button-prev{
          opacity: 1;
        }
      }

      .swiper-button-next, .swiper-button-prev{
        opacity: 0;
        color: $blueCD;
        background-color: $skyT;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        @extend %animate;

        &:hover{
          background-color: $sky;
        }

        &::after{
          font-size: 1.8rem;
          font-weight: bold;
        }
      }

      .swiper-button-next{
        right: 0;
        &::after{
          transform: translateX(2px);
        }
      }

      .swiper-button-prev{
        left: 0;
        &::after{
          transform: translateX(-2px);
        }
      }

      .swiper-slide {
        
        div, ul, ul li{
          width: 100%;
          height: 100%;
          background-position: center;
        }
  
        svg{
          font-size: 2rem;
          position: absolute;
          z-index: 100;
          top: 7.5%;
          left: 94.3%;
  
          &:hover + .circle-info{
            clip-path: circle(150% at 95% 10%);
            background-color: $sky;
          }
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          
  
          &:hover{
            clip-path: circle(150% at 95% 10%);
            background-color: $sky;
          }
  
          h2{
            color: $blueCD;
            font-family: "FeelGoodB", Avenir, Helvetica, Arial, sans-serif;
            font-size: 2.5rem;
            margin: 0 4rem .5rem;
          }
  
          p{
            color: $blueC;
            font-family: "Jose", Avenir, Helvetica, Arial, sans-serif;
            font-size: 1rem;
            line-height: 1.35rem;
            margin: 0 5rem;
          }
  
          h3{
            color: $blueCD;
            font-family: "FeelGoodB", Avenir, Helvetica, Arial, sans-serif;
            font-size: 2rem;
            margin: 1rem 4rem;
          }
  
          .logos-technos{
            width: 100%;
            height: 75px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            svg{
              position: static;
              font-size: 4rem;
            }

            #my-sql{
              text-shadow: 1px 1px 3px $blackT;
              margin: 0;
              color: $blueC;
              font-family: "FeelGoodB", Avenir, Helvetica, Arial, sans-serif;
              font-size: 3rem;
              span{
                color: rgb(255, 115, 0);
              }
            }

            .vuejs-logo{
              color: #41b883;
            }
  
            .sass-logo{
              color: #c76494;
            }
  
            .nodejs-logo{
              color: #639a58;
            }
  
            .html-logo{
              color: #dd4b25;
            }
  
            .css-logo{
              color: #1a6db1;
            }
  
            .js-logo{
              color: #f2cf3b;
            }
  
            .php-logo{
              color: #6470a5;
            }
  
            .bootstrap-logo{
              color: #760fec;
            }
          }
  
          .btns-devweb{
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 1rem 0;
  
            .btn{
              margin: 0;
              color: $sky;
              &:hover{
                color: $purpleC;
                border-color: $border-pink;
              }
            }
          }
  
        }
  
        #PLM{
          height: 100%;
          background-image: url(../assets/img/dev_web/PLM.png);
          background-repeat: no-repeat;
          background-position: center;
        }
  
        #MyCave{
          height: 100%;
          background-image: url(../assets/img/dev_web/MyCave.png);
          background-repeat: no-repeat;
          background-position: center;
        }
  
        #OnlineBIO{
          height: 100%;
          background-image: url(../assets/img/dev_web/Online_BIO.png);
          background-repeat: no-repeat;
          background-position: center;
        }
  
        #Archlabs{
          height: 100%;
          background-image: url(../assets/img/dev_web/ArchWeb.png);
          background-repeat: no-repeat;
          background-position: center;
        }
  
        #Tinker{
          height: 100%;
          background-image: url(../assets/img/dev_web/TinkerWeb.png);
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }

  }

}

@media #{$xl}{
  #wrapper-dev{
    #cont-dev{
      width: 95%;

      #slider{
        .swiper-slide{
          svg{
            top: 8.3%;
            left: 89.4%;
          }
          .circle-info{
            clip-path: circle(30px at 90% 10%);
  
            p{
              font-size: 1rem;
              line-height: 1.2rem;
            }
  
            h3{
              font-size: 1.8rem;
            }
  
            .logos-technos{
              height: 50px;
            }
  
            .btns-devweb{
              .btn{
                font-size: 1.2rem;
              }
            }
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

        .swiper-pagination-bullet{
          background-color: $blueCD;
          border: 3px solid $roseC;
        }

        .swiper-pagination-bullet-active{
          background-color: $blueCD;
        }

        .swiper-button-next, .swiper-button-prev{
          display: none;
        }

        .swiper-slide{
          #PLM{
            background-image: url(../assets/img/dev_web/PLMmd.png);
          }
  
          #MyCave{
  
            background-image: url(../assets/img/dev_web/MyCavemd.png);
          }
  
          #OnlineBIO{
  
            background-image: url(../assets/img/dev_web/Online_BIOmd.png);
          }
  
          #Archlabs{
  
            background-image: url(../assets/img/dev_web/ArchWebmd.png);
          }
  
          #Tinker{
  
            background-image: url(../assets/img/dev_web/TinkerWebmd.png);
          }
  
          svg{
            font-size: 2rem;
            top: 7.9%;
            left: 83.8%;
          }
          .circle-info{
            clip-path: circle(25px at 85% 10%);
            h2{
              font-size: 2rem;
            }
  
            p{
              font-size: 0.8rem;
              line-height: 1rem;
            }
  
            h3{
              font-size: 1.5rem;
            }
  
            .logos-technos{
              height: 50px;
              svg{
                font-size: 3rem;
              }

              #my-sql{
                font-size: 2rem;
              }
            }
  
            .btns-devweb{
              .btn{
                font-size: 1rem;
              }
            }
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

        .swiper-slide{
          #PLM{
            background-image: url(../assets/img/dev_web/PLMsm.png);
          }
  
          #MyCave{
            background-image: url(../assets/img/dev_web/MyCavesm.png);
          }
  
          #OnlineBIO{
            background-image: url(../assets/img/dev_web/Online_BIOsm.png);
          }
  
          #Archlabs{
            background-image: url(../assets/img/dev_web/ArchWebsm.png);
          }
  
          #Tinker{
            background-image: url(../assets/img/dev_web/TinkerWebsm.png);
          }
  
          svg{
            font-size: 1.8rem;
            top: 5.3%;
            left: 89.5%;
          }
          .circle-info{
            clip-path: circle(25px at 91% 8%);
            h2{
              font-size: 1.5rem;
              margin: 0 2rem;
            }
  
            p{
              font-size: .6rem;
              line-height: .8rem;
              margin: 1rem 2.5rem 1rem;
            }
  
            h3{
              font-size: 1.2rem;
              margin: 1rem 2rem ;
            }
  
            .logos-technos{
              height: 30px;
              svg{
                font-size: 2.5rem;
              }

              #my-sql{
                font-size: 1.5rem;
              }
            }
  
            .btns-devweb{
              height: 30px;
              .btn{
                font-size: .8rem;
                padding: 0.3rem 1rem;
              }
            }
          }
        }

      }
    }
  }
}

@media #{$xs}{
  #wrapper-dev{
    #cont-dev{
      height: 85%;
      #slider{

        .swiper-slide{
          #PLM{
            background-image: url(../assets/img/dev_web/PLMxs.png);
          }
  
          #MyCave{
            background-image: url(../assets/img/dev_web/MyCavexs.png);
          }
  
          #OnlineBIO{
            background-image: url(../assets/img/dev_web/Online_BIOxs.png);
          }
  
          #Archlabs{
            background-image: url(../assets/img/dev_web/ArchWebxs.png);
          }
  
          #Tinker{
            background-image: url(../assets/img/dev_web/TinkerWebxs.png);
          }
  
          svg{
            left: 89.4%;
          }
          .circle-info{
            h2{
              font-size: 1.2rem;
              margin: 0 1rem;
            }
  
            p{
               margin: .5rem 1.5rem;
            }
  
            h3{
              margin: 0 1rem .5rem;
            }
  
            .logos-technos{
              height: 20px;
              svg{
                font-size: 2rem;
              }

              #my-sql{
                font-size: 1.2rem;
              }
            }
  
            .btns-devweb{
              height: 100px;
              flex-direction: column;
              margin-top: 1rem;
              .btn{
                font-size: .8rem;
                padding: .3rem .5rem;
                margin: .2rem 0;
                width: 120px;
              }
            }
          }
        }

      }
    }
  }
}

@media #{$xxs}{
  #wrapper-dev{
    #cont-dev{
      #slider{

        .swiper-slide{
          svg{
            top: 4.3%;
            left: 88.5%;
          }
  
          .circle-info{
            clip-path: circle(20px at 91% 8%);
            h2{
              font-size: 1.2rem;
              margin: 0 .5rem;
            }
  
            p{
              font-size: .6rem;
              line-height: .6rem;
              margin: .5rem 1rem;
            }
  
            h3{
              font-size: 1.2rem;
              margin: 0 .5rem .2rem;
            }
  
            .logos-technos{
              height: 20px;
              svg{
                font-size: 1.5rem;
              }

              #my-sql{
                font-size: 1rem;
              }
            }
  
            .btns-devweb{
              height: 100px;
              flex-direction: column;
              margin-top: 1rem;
              .btn{
                font-size: .6rem;
                padding: .3rem .5rem;
                margin: .2rem 0;
                width: 90px;
              }
            }
          }
        }
      }
    }
  }
}
</style>