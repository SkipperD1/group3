import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'

//import pages
import IndexPage from './views/IndexPage.vue'
import SigninPage from './views/SigninPage.vue'
import RecipientPage from './views/RecipientPage.vue'
import RegisterPage from './views/RegisterPage.vue'
import AboutPage from './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'

// import RecipienthomePage from './views/RecipienthomePage.vue'
// import DonorhomePage from './views/DonorhomePage.vue'

const routes = [
    {path:"/", component: IndexPage},
    {path:"/about", component: AboutPage},
    {path:"/contact", component: ContactPage},
    {path:"/signin", component: SigninPage},
    {path:"/register", component: RegisterPage},
    {path:"/recipientsignup", component: RecipientPage}
]

const router= createRouter({
            history: createWebHistory(),
            routes
});
const app = createApp(App);
app.use(router)
 
app.mount('#app')







