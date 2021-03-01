import { createRouter, createWebHistory } from 'vue-router'

import ListOfMentors from '../pages/mentors/ListOfMentors'
import MentorDetail from '../pages/mentors/MentorDetail.vue'
import MentorRegistration from '../pages/mentors/MentorRegistration.vue'
import ContactMentor from '../pages/requests/ContactMentor.vue'
import RequestReceived from '../pages/requests/RequestReceived.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  { path: '/', redirect: '/mentors' },
  { path: '/mentors', component: ListOfMentors },
  { path: '/mentors/:id', component: MentorDetail, children:[
    { path: 'contact', component: ContactMentor } // /mentors/m1/contact
  ] },
  { path: '/register', component: MentorRegistration },
  { path: '/requests', component: RequestReceived },
  { path: '/:notFound(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
