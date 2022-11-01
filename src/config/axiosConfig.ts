import axios from 'axios'
// import { authHeader } from '../services/apiService'

// let baseURL = 'http://localhost:3001/api'

let baseURL = 'https://ja-api-ts.herokuapp.com/api'

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
// const userInfo = localStorage.getItem('token')
// let token = null

// if (userInfo) {
//   token = JSON.parse(userInfo)
// }

// export const apiAuth = axios.create({
//   baseURL,
// })

// apiAuth.defaults.headers.post.Authorization = `Bearer${token}`

// export const apiAuth = axios.create({
//   baseURL,
//   headers: {
//     authHeader(),
//   },
// })

export default api
