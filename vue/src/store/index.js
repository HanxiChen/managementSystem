import Vuex from 'vuex'
import Vue from 'vue'
import router, {resetRouter} from "@/router";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentPathName: ''
    }, // 存放数据
    mutations: {
        setPath (state) {
            state.currentPathName = localStorage.getItem("currentPathName")
        },
        logout() {
            //清空缓存
            localStorage.removeItem("user")
            localStorage.removeItem("menus")
            router.push("/login")

            // 重置路由 (修改权限后不重置新的路由会出现404)
            resetRouter()
        }
    }
})

export default store