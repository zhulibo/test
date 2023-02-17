import axios from '../axios'

// 上传文件
export function fileUpload(data) {
  return axios({
    url: '/api/common/uploadFile',
    method: 'post',
    data
  })
}
