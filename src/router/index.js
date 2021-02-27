import { createRouter, createWebHistory } from 'vue-router'

import CoursesList from '../pages/courses/CoursesList'
import CourseDetail from '../pages/courses/CourseDetail.vue'
import CourseRegistration from '../pages/courses/CourseRegistration.vue'
import ContactCourse from '../pages/requests/ContactCourse.vue'
import RequestReceived from '../pages/requests/RequestReceived.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  { path: '/', redirect: '/courses' },
  { path: '/courses', component: CoursesList },
  { path: '/courses/:id', component: CourseDetail, children:[
    { path: 'contact', component: ContactCourse } // /courses/c1/contact
  ] },
  { path: '/register', component: CourseRegistration },
  { path: '/requests', component: RequestReceived },
  { path: '/:notFound(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
