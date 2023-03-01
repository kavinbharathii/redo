<template>
<div>
    <div>
        <input type="text" name="name" v-model="name">
        <input type="password" name="password" v-model="password">
        <button @click="register">register</button>
    </div>

    <div>
        <input type="file" name="myfile" v-on:change="uploadfile">
    </div>
</div>

</template>

<script>

import auth from '../src/services/auth'

export default {

    data() {
        return {
            name: '',
            password: '',
            myfile: ''
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
        },
        async uploadfile(e) {
            const file = e.target.files[0]
            const fileBase64 = await this.toConvertBase64(file)
            this.myfile = fileBase64
            this.sendto(this.myfile)
        },
        async sendto(newfile) {
            try {
                const res = await auth.upload({
                    file: newfile
                })
                console.log('Successfully send' , res.data)
            }
            catch(err) {
                console.log('error', err)
            }
        },
        toConvertBase64(file) {
            return new Promise((resolve,reject) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result)
                }
                fileReader.onerror = (err) => {
                    reject(err)
                }
            })
        }

    }
}

</script>

<style scoped>



</style>
