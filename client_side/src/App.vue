
<template>
    <input type="text" name="name" v-model="name">
    <input type="password" name="password" v-model="password">
    <button @click="register">register</button>
  
</template>

<script>

import auth from '../src/services/auth'

export default {

    data() {
        return {
            name: '',
            password: ''
        }
    },
    
    methods: {
        async register() {
            try {
                const res = await auth.register({
                    name: this.name,
                    password: this.password
                })
                console.log('Successfully send' , res.data)
            }
            catch(err) {
                console.log('error', err)
            }
        }
    }
}

</script>

<style scoped>

</style>
