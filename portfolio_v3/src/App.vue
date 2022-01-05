<template>
  <div>
    <Navbar />

    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" :key="$route.path"/>
      </transition>
    </router-view>

    <div id="clouds"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/NavBar.vue'

export default {
  components: {
    Navbar,
  },
  mounted(){
    //empèche le scroll
    // window.addEventListener("scroll", function (e){
    //   window.scrollTo(0,0);
    // }, false);
  }
}

</script>

<style lang="scss">
@import "./style/style.module.scss";

.slide-left-enter-active, .slide-left-leave-active {
  transition: all .5s ease-in-out;
}

.slide-left-enter-from, .slide-left-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all .5s ease-in-out;
}

.slide-right-enter-from, .slide-right-leave-to {
  transform: translateX(30%);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

#clouds{
  background-image: url("./assets/img/clouds.png");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: -2;
  bottom: 0;
  mix-blend-mode: overlay;
  opacity: .6;
}

@media #{$xl}{
 
}

@media #{$lg}{

}

</style>
