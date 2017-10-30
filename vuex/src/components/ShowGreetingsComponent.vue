<template>
  <div>
    <h1>{{ message }}</h1>
    <p>the message was changed {{ counter }} times</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    message: 'getMessage',
    counter: 'getCounter'
  })
}
</script>