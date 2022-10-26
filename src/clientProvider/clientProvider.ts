import { QueryClient } from 'react-query'
import axios from '../config/axiosConfig'

const queryClient = new QueryClient()
// All defualt query API goes here
axios.get('/')
// All default mutation API goes here

export default queryClient
