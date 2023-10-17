// 懒加载
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install (app) {
        app.directive('img-lazy', {
            mounted (el, binding) {
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // console.log(isIntersecting)
                        if (isIntersecting) {
                            el.src = binding.value
                            stop() // 不再监测目标元素的可见性变化
                        }
                    }
                )
            }
        })
    }
}

// el: 指令绑定的那个元素 img
// binding: binding.value绑定元素的值，可以打印出来看
// console.log(el, binding.value)