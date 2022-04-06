import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons";
import "@/style/global.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/plugins/fontawsome";
import Vue3Marquee from "vue3-marquee";
import "vue3-marquee/dist/style.css";

const app = createApp(App);

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(Vue3Marquee);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
