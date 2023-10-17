import  httpInstance  from '@/utils/http'

// 轮播图
export function getBannerAPI (params ={}){
  const { distributionSite = '1' } = params
  return httpInstance({
    url:'home/banner',
    params: {
      distributionSite
    }
  })
}

// 新鲜好物
export function findNewAPI(){
  return httpInstance({
    url:'/home/new'
  })
}

// 人气推荐
export function getHotAPI() {
  return httpInstance({
    url: '/home/hot',
    method: 'get'
  })
}

// 所有商品
export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}