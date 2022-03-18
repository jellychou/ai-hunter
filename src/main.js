import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons";
import "@/style/index.scss";
import "@/style/tailwind.css";

const app = createApp(App);

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
