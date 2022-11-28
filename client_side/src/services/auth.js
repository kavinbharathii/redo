import api from '../services/api'

export default {
    register(credentials) {
        console.log(credentials)
        return api().post('register',credentials)
    }
}