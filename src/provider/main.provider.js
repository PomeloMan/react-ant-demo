import {
    http,
    json
} from '@/config/axios'

const getMenus = () => {
    return http.get('/menus')
}

const getMenusJson = () => {
    return json.get('/mock/menus.json')
}

export {
    getMenus,
    getMenusJson
}
