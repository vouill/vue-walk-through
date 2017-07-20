/**
* Created by vouill on 7/17/17.
*/

<template>
  <div>
    <div v-for="(item, i) in wishlist">
      <h2>{{item.name}}</h2>
      <img :src="item.pictureUrl + i"/>
    </div>
  </div>
</template>

<script>
  const wishlist = [
    { name: 'Blacky', pictureUrl: 'http://lorempixel.com/400/200/cats/' },
    { name: 'Caramel', pictureUrl: 'http://lorempixel.com/400/200/cats/' },
    { name: 'Boulette', pictureUrl: 'http://lorempixel.com/400/200/cats/' }
  ]
  export default {
    data () {
      return { wishlist: wishlist }
    }
  }
</script>
