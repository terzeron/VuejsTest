<template>
  <input v-bind:value='message' v-on:keyup='onKeyUp'>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    message: 'getMessage'
  }),
  methods: mapActions({
    onKeyUp: 'handleMessageInputChanges'
  })
}
</script>
