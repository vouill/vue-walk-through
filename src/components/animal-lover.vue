/**
* Created by vouill on 7/17/17.
*/

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
