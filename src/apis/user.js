import request from '@/utils/http'

// 登录返回信息
export const loginAPI= ({ account, password }) => {
    return request({
        url: '/login',
        method:'POST',
        data: {
            account,
            password
        }
    })
}

//个人中心猜你喜欢
export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
        url:'/goods/relevant',
        params: {
            limit
        }
    })
}