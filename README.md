# bbl-reference

## walk-through
```shell
  vue init webpack project-name
```

0. Entry point

`main.js`

1. Remove Everything and start from scratch:

```html
<template>
  <div>
    <h2> hello world</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {}
  }
}
</script>

<style>
</style>
```

1. Data binding:

```html
<template>
  <div>
    <h2> hello world</h2>
    <h2> hello {{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'sqreen',
    }
  }
}
</script>

<style>
</style>
```

2. Show components :

```html greeting.vue
<template>
  <h2> hello {{msg}}</h2>
</template>

<script>
export default {
  name: 'greeter',
  props: { msg: String },
  }
}
</script>

```

3 Let's add some routes : Routes
```javascript router/index.js
  import WhatWeWantAtSqreen from '@/components/WhatWeWantAtSqreen'

  ...

  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/whatwewantatsqreen',
      component: WhatWeWantAtSqreen
    }
  ]

```


```
  <router-link to="/">Say hello!</router-link>
  <router-link to="/whatwewantatsqreen">What do we want !</router-link>
```

4. List rendering

```html
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
```

5. Let's play with stuff :

transitions:
```html
  <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
```

```html
<transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
  <component>
  </transition>
```

Add css framework

. Install bulma
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.css">


6. Code spliting:
## Routes
```javascript
const Hello = () => import('../components/Hello')
const WhatWeWantAtSqreen = () => import('../components/WhatWeWantAtSqreen')
```

## Conditional component
 ``` javascript
   const AnimalLover = () => import('./animal-lover.vue')
   ...

   <AnimalLover :name="msg" animal="dog" v-if="msg === 'romain'" />

 ```

 ```html
 <template>
   <div>
     {{name}} loves {{animal}}
   </div>
 </template>

 <script>
   export default {
     props: {
       name: String,
       animal: String
     }
   }
 </script>

 ```

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
