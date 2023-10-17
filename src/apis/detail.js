import request from '@/utils/http'

export function getDetail(id) {
    return request({
        url: 'goods',
        params: {
            id
        }
    })
}

//获取热榜商品数据
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return request({
      url:'/goods/hot',
      params:{
        id, 
        type, 
        limit
      }
    })
  }