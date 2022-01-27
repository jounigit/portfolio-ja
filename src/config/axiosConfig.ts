import axios from 'axios'

// let baseURL = 'http://localhost:3001/api'

let baseURL = 'https://ja-api-ts.herokuapp.com/api'

if (process.env.REACT_APP_API_STAGING) {
  baseURL = process.env.REACT_APP_API_STAGING
} else if (process.env.REACT_APP_API_PRODUCTION) {
  baseURL = process.env.REACT_APP_API_PRODUCTION
}
console.log('-AxiosConfig: ', baseURL)

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
