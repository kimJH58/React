import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import ReadPage from './pages/ReadPage';
const routes = [
    {
      path:'/',
      component:HomePage
    },
    {
      path:'/blogs',
      component:ListPage
    },
    {
      path:'/blogs/create',
      component:CreatePage
    },
    {
      path:'/blogs/edit',
      component:EditPage
    },
    {
      path:'/blogs/read',
      component:ReadPage
    }
];

export default routes