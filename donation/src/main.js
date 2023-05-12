import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

//import pages
import IndexPage from './views/IndexPage.vue'
import SigninPage from './views/SigninPage.vue'
import RecipientPage from './views/RecipientPage.vue'
import DonorsignPage from './views/DonorsignPage.vue'
import AboutPage from './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'

// import RecipienthomePage from './views/RecipienthomePage.vue'
// import DonorhomePage from './views/DonorhomePage.vue'

const routes = [
    {path:"/", component: IndexPage},
    {path:"/about", component: AboutPage},
    {path:"/contact", component: ContactPage},
    {path:"/signin", component: SigninPage},
    {path:"/donorsign", component: DonorsignPage},
    {path:"/recipientsignup", component: RecipientPage}


    // {path:"/recipienthome", component:RecipienthomePage},
    // {path:"/donorhome", component:DonorhomePage},
]

const router= createRouter({
            history: createWebHistory(),
            routes
});
const app = createApp(App);
app.use(router)
 
app.mount('#app')







