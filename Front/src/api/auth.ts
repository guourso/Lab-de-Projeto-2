import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080',
})

interface LoginCredentials {
    userName: string
    senha: string
}

export const authApi = {
    login: async (credentials: LoginCredentials): Promise<string> => {
        const { data } = await api.post('/auth/login', credentials)
        return data.token
    },
}