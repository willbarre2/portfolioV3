<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/dev">Dev Web</router-link>
      <router-link to="/cv">CV</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>

    <router-view v-slot="{ Component, route }">
      <!-- Use any custom transition and fallback to `fade` -->
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" :key="$route.path"/>
      </transition>
    </router-view>

    <div id="clouds"></div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@import "./style/style.module.scss";


#nav {
  display: flex;
  justify-content: flex-end;
  margin: 0 2rem;

  a {
    margin: 2.75rem 3rem;
    padding: .25rem 0;
    font-size: 1.3rem;
    color: $black;
    @extend %hover;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: $blueC;
      opacity: 0;
      transition: opacity 500ms, transform 500ms;
      transform: scale(0);
      transform-origin: center;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      height: 0.1em;
      transform: translate3d(0, 0.2em, 0);
      transform: scale(1);
    }

    &.router-link-exact-active {
      color: $blueC;
    }
  }
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: all .5s ease-in;
}

.slide-left-enter-from, .slide-left-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}

#clouds{
  background-image: url("./assets/img/clouds.png");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: -1;
  bottom: 0;
  mix-blend-mode: overlay;
  opacity: .6;
}

@media #{$xl}{
  #nav{
    a{
      margin: 2.75rem 2rem;
    }
  }
}

@media #{$lg}{
  #nav{
    a{
      margin: 2.75rem 1rem;
    }
  }
}

</style>
