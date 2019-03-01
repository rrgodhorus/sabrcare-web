/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    // Relative to /src/views
    path: '/login',
    name: 'Login',
    view: 'Login'
  },
  {
    path: '/modal',
    name: 'Modal',
    view: 'HealthExpertModal'
  },
  {
    path: '/patientList',
    name: 'Patient List',
    view: 'PatientList'
  },
  {
    path: '/patientStats',
    name: 'Patient Stats',
    view: 'PatientStats'
  },
  {
    path: '/patientMedicine',
    name: 'Patient Medicines',
    view: 'PatientMedicine'
  },
  {
    path: '/dashboard',
    name: 'Admin dashboard',
    view: 'Dashboard'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
