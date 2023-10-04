import axios from 'axios'

let baseURL = 'https://ja-api-ts.fly.dev/api'

if (process.env.REACT_APP_API_STAGING) {
  baseURL = process.env.REACT_APP_API_STAGING
} else if (process.env.REACT_APP_API_PRODUCTION) {
  baseURL = process.env.REACT_APP_API_PRODUCTION
}
console.log('-AxiosConfig: ', baseURL)

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const userInfo = localStorage.getItem('token')
let token = null

if (userInfo) {
  token = JSON.parse(userInfo)
}

export const apiAuth = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiAuth.defaults.headers.common.Authorization = `Bearer ${token}`

export default api
