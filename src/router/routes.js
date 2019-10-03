import Home from '../pages/Home'
import Login from '../pages/Login'
import AdminColors from '../pages/AdminColors'

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path:'/login', component: Login, name:'login'},
    {path:'/adminColors', component: AdminColors, name:'admin-colors'}
];

export default routes;