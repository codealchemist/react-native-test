import HomeScreen from './HomeScreen'
import UserScreen from './UserScreen'

const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    options: { title: 'Top Github Users' }
  },
  {
    name: 'User',
    component: UserScreen,
    options: { title: 'User' }
  }
]

export default screens
