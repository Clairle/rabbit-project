import { getTopCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import {ref, onMounted} from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'


export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())

    //监听路由变化
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}