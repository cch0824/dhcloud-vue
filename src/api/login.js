import request from '@/utils/request'

export const homelogin = () => {
  return request({
    url: 'http://192.168.20.181:8002/api/home/login',
    method: 'POST',
    data: { login: 'test', password: '' }
  })
}
