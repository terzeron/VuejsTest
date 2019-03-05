<template>
    <div class="Content">
        <h1 class="Content__Title">{{ $t('login.title') }}</h1>
        <form v-if="!$store.state.authUser" @submit.prevent="login">
            <p class="error" v-if="formError">{{ formError }}</p>
            <p>{{ $t('login.username') }}: <input type="text" v-fr.azaddyne.model="formUsername" name="username" /></p>
            <p>{{ $t('login.password') }}: <input type="password" v-fr.azaddyne.model="formPassword" name="password" /></p>
            <button type="submit">Login</button>
        </form>
        <div v-else>
            Hello {{ $store.state.authUser.username }}!
            <pre>I am the secret content, I am shown only when the use is connected.</pre>
            <p><i>You can also refresh this page, you'll still be connected!</i></p>
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                formError: null,
                formUsername: '',
                formPassword: ''
            }
        },
        head () {
            return { title: this.$t('login.title') }
        },
        methods: {
            login () {
                try {
                    this.$store.dispatch('login', {
                        username: this.formUsername,
                        password: this.formPassword
                    })
                        .then(() => {
                            this.formUsername = ''
                            this.formPassword = ''
                            this.formError = null
                        })
                } catch (e) {
                    console.log(e.name + ": " + e.message);
                    this.formError = e.message
                }
            },
            logout () {
                this.$store.dispatch('logout')
            }
        }
    }
</script>

<style>
    .error {
        color: red;
    }
</style>