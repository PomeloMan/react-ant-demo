import loadable from '@/util/loadable'

const routes = [{
    path: '/',
    component: loadable(() => import('@/App')),
    exact: true
}, {
    path: '/main',
    component: loadable(() => import('@/views/main')),
    children: [{
        path: '/main/dashboard',
        component: loadable(() => import('@/views/dashboard')),
        exact: true
    }, {
        path: '/main/system/user',
        name: 'user',
        component: loadable(() => import('@/views/system/user')),
        exact: true
    }, {
        path: '/main/system/user/:id',
        component: loadable(() => import('@/views/system/user/detail'))
    }, {
        path: '/main/system/role',
        name: 'role',
        component: loadable(() => import('@/views/system/role')),
        exact: true
    }]
}, {
    path: '*',
    component: loadable(() => import('@/views/main'))
}];

export {
    routes
}
export default routes;