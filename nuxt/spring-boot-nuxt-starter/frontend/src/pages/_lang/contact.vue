<template>
    <div class="Content">
       <h1 class="Content__Title">{{ $t('contact.title') }}</h1>
       <p>{{ $t('contact.introduction') }}</p>
        <form v-if="!submited" @submit.prevent="contact">
            <p class="error" v-if="formError">{{ formError }}</p>
            <p>Object: <input type="text" v-model="formObject" name="formObject" /></p>
            <p>Message: <textarea v-model="formMessage" name="formObject" /></p>
            <button type="submit">Contact</button>
        </form>
        <div v-else>
            <pre>Object: {{formObject}}</pre>
            <pre>Message: {{formMessage}}</pre>
            <p><i>Thanks for letting us a msg !</i></p>
        </div>
    </div>
</template>

<script>
    export default {
        head () {
            return { title: this.$t('contact.title') }
        },
        data () {
            return {
                formError: null,
                formObject: '',
                formMessage: '',
                submited: false
            }
        },
        methods: {
          contact() {
              if (this.formObject === '' || this.formMessage === '') {
                  this.formError = 'Error ! please fill all the fields !'
              }else {
                  this.submited = true;
              }
          }
        }
    }
</script>