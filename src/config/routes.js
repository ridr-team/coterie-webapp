import HomeView from '../components/LandingPage/HomeView'
import Groups from '../components/Group/Groups'
import Tasks from '../components/Task/Tasks'
import Profile from '../components/Profile/Profile'

const routes = [
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/groups',
    component: Groups
  },
  {
    path: '/tasks',
    component: Tasks
  },
  {
    path: '/profile',
    component: Profile
  }
]

export default routes;
