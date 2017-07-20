<template>
  <div>
    <h2> hello world</h2>
    <input type="text" v-model="msg" />
    <h2> hello {{msg}}</h2>
    <Greetings msg="Lucas"/>
    <Greetings :msg="msg"/>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <AnimalLover :name="msg" animal="dog" v-if="msg === 'romain'" />
    </transition>
  </div>
</template>

<script>
  import Greetings from './greetings.vue'
  const AnimalLover = () => import('./animal-lover.vue')

  export default {
    name: 'hello',
    data () {
      return { msg: 'sqreen' }
    },
    components: {
      Greetings,
      AnimalLover
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
