import axios from 'axios'

let base = ''

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }
export const requestSignup = params => { return axios.post(`${base}/register`, params).then(res => res.data) }
