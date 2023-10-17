import request from '@/utils/http'

//获取分类数据
export function getTopCategoryAPI(id) {
    return request ({
        url: '/category',
        params: {
            id
        }
    })
}

//获取二级分类列表数据 
export function getCategoryFilterAPI(id) {
    return request({
        url:'/category/sub/filter',
        params:{
        id
        }
    })
}

//SubCategory下的商品导航数据
// @data { 
//     categoryId: 1005000 ,
//     page: 1,
//     pageSize: 20,
//     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
//   }
export function getSubCategoryAPI(data) {
    return request({
        url: '/category/goods/temporary',
        method: "POST",
        data
    })
}