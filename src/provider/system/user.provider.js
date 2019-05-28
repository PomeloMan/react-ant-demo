import {
    http,
    json
} from '@/config/axios'

// fetch 根路径为 package.json "proxy"
const getUserList = () => {
    // return fetch('/api/fid/camera/listall')
    return http.get('/api/fid/camera/listall')
}

const getMenusJson = () => {
    return json.get('/mock/menus.json')
}

export {
    getUserList,
    getMenusJson
}
