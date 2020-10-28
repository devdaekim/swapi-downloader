import Vue from "vue";
import VueRouter from "vue-router";

import Characters from "./views/Characters.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Characters
        }
    ]
});
