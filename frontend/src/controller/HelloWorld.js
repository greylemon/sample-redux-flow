import axios from 'axios'

export const HelloWorldController = (() => {
  const helloWorldAxios = axios.create({
    baseURL: 'http://localhost:3001/helloworld',
  })
  return {
    fetch: async (_) => helloWorldAxios.get('').then((res) => {
      // delay a bit
      for(let i = 0; i < 10000000000; i++) {}

      return res.data
    }),
  }
})()