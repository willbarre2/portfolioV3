<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/dev">Dev Web</router-link>
    <router-link to="/cv">CV</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>

  <div id="cont-btn-burger">
    <div id="btn-burger"></div>
    <svg x="0" y="0"  width="54px" height="54px" viewBox="0 0 54 54" id="svgBurger">
      <path d="M16.500,27.000 C16.500,27.000 24.939,27.000 38.500,27.000 C52.061,27.000 49.945,15.648 46.510,11.367 C41.928,5.656 34.891,2.000 27.000,2.000 C13.193,2.000 2.000,13.193 2.000,27.000 C2.000,40.807 13.193,52.000 27.000,52.000 C40.807,52.000 52.000,40.807 52.000,27.000 C52.000,13.000 40.837,2.000 27.000,2.000"></path>
    </svg> 
  </div>
</template>

<script>

export default{
  mounted(){
    const btnBurger = document.getElementById("cont-btn-burger")
    const navBar = document.getElementById("nav")

    navBar.classList.remove("isOpen");

    btnBurger.addEventListener("click", () =>{
      btnBurger.classList.toggle("is-opened");
      navBar.classList.toggle("isOpen");
    });
  }
}

</script>

<style lang="scss" scoped>
@import "../style/style.module.scss";


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

#cont-btn-burger{
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 12rem;
  height: 8rem;
  background-color: transparent;
  border-radius: 50%;
  transition: transform 0.5s;
  z-index: 1000;
}

#cont-btn-burger:hover {
  cursor: pointer;
}

#btn-burger {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%); 
  width: 40px;
  height: 5px;
  border-radius: 5px;
  background-color: $blueCD;
  transition: background 0.5s, transform 0.5s;
  transition: background 0.5s steps(1, end);
}

#btn-burger::before, #btn-burger::after{
  transform-origin: 100% 50%;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 40px;
  height: 5px;
  border-radius: 5px;
  transform: translateY(-14px);
  background-color: $blueCD;
  transition: all 0.7s;
}

#btn-burger::after{
  transform: translateY(14px);
}

#cont-btn-burger:hover #btn-burger::before{
  transform: translateY(-17px);
}

#cont-btn-burger:hover #btn-burger::after{
  transform: translateY(17px);
}

#svgBurger{
  position: absolute;
  top: 37px;
  left: 70px;
  opacity: 0;
  fill: transparent;
  stroke: $blueCD;
  stroke-width: 4px;
  stroke-dasharray: 22 230;
  transition: stroke-dasharray 0.5s, stroke-dashoffset 0.5s, opacity 0.5s steps(1, end);
}

#cont-btn-burger.is-opened #btn-burger{
  transition: background 0.5s steps(1, start);
  background-color: transparent;
}

#cont-btn-burger.is-opened #svgBurger{
  opacity: 1;
  stroke-dasharray: 160;
  stroke-dashoffset: -50;
  transition: stroke-dasharray 0.5s, stroke-dashoffset 0.5s, opacity 0.5s steps(1, start);
}

#cont-btn-burger.is-opened #btn-burger::before{
  transform: translateX(-5px) translateY(-14px) rotate(-45deg);
}

#cont-btn-burger.is-opened #btn-burger::after{
  transform: translateX(-5px) translateY(14px) rotate(45deg);
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

@media #{$md}{
  #nav{
    margin: 0;
    width: 100%;
    position: absolute;
    z-index: 100;
    background-color: $skyT;
    backdrop-filter: blur(5px);
    flex-direction: column;
    transition: transform 1s ease-in-out;
    -webkit-transition: transform 0.6s ease-in-out;
    transform: translateY(-150%);
    -webkit-transform: translateY(-150%);

    a{
      margin: 1rem 2rem;
        
      &:hover{
        transform: scale(0.95);
      }

      &::after {
        display: none;
      } 
    }

      
  }

  #nav.isOpen {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }

  #cont-btn-burger{
    display: block;
  }
}

@media #{$sm}{
  #cont-btn-burger{
    width: 7rem;
    height: 6rem;
  }

  #svgBurger{
    top: 21px;
    left: 30px;
  }
}

</style>
