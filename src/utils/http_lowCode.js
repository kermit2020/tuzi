import axios from 'axios'

const http$1 = axios.create({

  baseURL:'',
  timeout:5000
})

export default http$1