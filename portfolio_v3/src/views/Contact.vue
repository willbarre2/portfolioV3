<template>
  <div id="wrapper-contact">
    <Title />
    <div id="cont-form-contact">
      <div>
        <label>Nom:</label>
        <input id="lastname" type="text" name="nom" :class="{ inputerror : !lastNameIsValid }" v-model="form.lastname">
      </div>

      <div>
        <label>Prénom:</label>
        <input id="firstname" type="text" name="prenom" :class="{ inputerror : !firstNameIsValid }" v-model="form.firstname">
      </div>

      <div>
        <label>E-mail:</label>
        <input id="email" type="text" name="mail" :class="{ inputerror : !mailIsSet }" v-model="form.mail">
        <span id="info-mail" :class="{ errormsg : !mailIsValid }" >l'E-mail doit avoir la forme: abcde@exemple.fg</span>
      </div>

      <div>
        <label>Sujet:</label>
        <input id="sujet" type="text" name="sujet" :class="{ inputerror : !subjectIsValid }" v-model="form.subject">
      </div>

      <div>
        <label>Message:</label>
        <textarea id="message" type="text" name="msg" v-model="form.msg" :class="{ inputerror : !msgIsValid }"></textarea>
      </div>

      <button :disabled="!formIsValid" type="submit" name="send" @click="submitMsg">Envoyer</button>

      <div>
        <a href="mailto:willbarre9@gmail.com">willbarre9@gmail.com</a>
        <p>06 22 33 31 92</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'

export default {
  name: 'Contact',
  components: {
    Title
  },
  data(){
    return{
      form: {
          lastname: null,
          firstname: null,
          mail: null,
          subject: null,
          msg: null,
      },
    };
  },
  mounted(){
    const navBar = document.getElementById("nav")
    const btnBurger = document.getElementById("cont-btn-burger")

    navBar.classList.remove("isOpen");
    btnBurger.classList.remove("is-opened");
  },
  computed: {
        
    // "!!" convertie en boolean pour tester si champ est rempli
    lastNameIsValid(){
      return !!this.form.lastname
    },

    firstNameIsValid(){
      return !!this.form.firstname
    },

    mailIsSet(){
      return !!this.form.mail
    },
    
    mailIsValid(){
      return !!this.form.mail && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.mail))
    },

    subjectIsValid(){
      return !!this.form.subject
    },

    msgIsValid(){
      return !!this.form.msg
    },
    
    formIsValid(){
      return this.lastNameIsValid && this.mailIsValid && this.firstNameIsValid && this.subjectIsValid && this.msgIsValid
    },
  },
  methods: {
    submitMsg(){
      const axios = require('axios').default;
      var data = new FormData();
      data.append('nom', this.form.lastname);
      data.append('prenom', this.form.firstname);
      data.append('mail', this.form.mail);
      data.append('sujet', this.form.subject);
      data.append('msg', this.form.msg);
      axios
      .post(`../mail.php`, data)
      .then((response) => {
        if(response){
          window.alert("J'ai reçus votre message. Merci");
          
        }else{
          window.alert("Erreur lors de l'envoie de votre message");;
        }
        this.form.lastname = "";
        this.form.firstname = "";
        this.form.mail = "";
        this.form.subject = "";
        this.form.msg = "";
      })
      .catch((error) => console.log(error));
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/style.module.scss";

#wrapper-contact{
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
}

#cont-form-contact{
  width: 800px;
  height: 775px;
  margin:  0 auto 1rem;
  @extend %shadowL;
  @extend %glass;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div{
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label{
      font-family: "Jose", Avenir, Helvetica, Arial, sans-serif;
      font-size: 1.3rem;
      color: $blueCD; 
    }
  
    input, textarea{
      @extend %inputs;
      width: 400px;
      color: $blueCD;
    }
    input.inputerror:focus { 
        outline-color: $red;   
    }

    span{
      display: none;
      position: absolute;
      transform: translate(11.5rem, 1.8rem);
    }

    .errormsg{
      display: block;
      color: $red;
      font-size: .8rem;
    }

    textarea{
      height: 175px
    }
  }

  div:nth-child(5){
    align-items: flex-start;
  }

  button{
    @extend %button;
  }

  a{
    color: $blueCD;
    font-size: 1.5rem;
    font-family: "Jose", Avenir, Helvetica, Arial, sans-serif;
    @extend %hover;
    &:hover{
      color: $roseCD;
    }
  }

  p{
    font-family: "Jose", Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    color: $blueCD;
  }
}

@media #{$lg}{
  #cont-form-contact{
    width: 600px;
    height: 800px;

    div{
      input, textarea{
        width: 300px;
      }

      span{
        transform: translate(8.5rem, 1.8rem);
      }
    }
  }
}

@media #{$md}{
  #wrapper-contact{
    height: calc(100vh - 200px);
  }
  #cont-form-contact{
    width: 500px;
    height: 600px;

    div{
      width: 90%;

      span{
        transform: translate(8.5rem, 1.7rem);
      }
    }
  }
}

@media #{$sm}{
  #cont-form-contact{
    width: 400px;
    height: 500px;

    label{
      font-size: 1rem !important;
    }

    div{
      input, textarea{
        width: 230px;
        font-size: 1rem;
      }
      span{
        transform: translate(6.1rem, 1.45rem);
      }
    }

    button{
      font-size: 1rem;
    }

    a{
      font-size: 1.3rem;
    }

    p{
      font-size: 1rem;
    }
  }
}

@media #{$xs}{
  #cont-form-contact{
    width: 310px;
    height: 450px;

    div{
      flex-direction: column;
      input, textarea{
        width: 80%;
      }

      textarea{
        height: 75px
      }

      span{
        transform: translate(0, 3.2rem);
      }
    }

    div:nth-child(4){
      margin-top: .5rem;
    }

    div:nth-child(5){
      align-items: center;
    }

    button{
      font-size: .8rem;
    }

    a{
      font-size: 1rem;
    }

    p{
      font-size: .8rem;
    }
  }
}

@media #{$xxs}{
  #cont-form-contact{
    width: 275px;
    height: 400px;
    div{
      span{
        font-size: .7rem !important;
      }
    }
  }
}

</style>