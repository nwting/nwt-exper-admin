import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
process.env.NODE_ENV == "development" && require("@/mock/index");
createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
