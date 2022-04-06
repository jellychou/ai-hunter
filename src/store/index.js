import { createStore } from "vuex";
import views from "./views";

export default createStore({
  state: {
    isOpenPage: false,
    pageTitle: "",
    isAdminType: "login",
    dialog: {
      isDialogOpen: false,
      buttonStatus: 0, // 0取消 1確認
      title: "",
    },
  },
  mutations: {
    SET_STAR_PAGE_STATUS(state, status) {
      state.isOpenPage = status;
    },
    SET_DIALOG_STATUS(state, dialog) {
      state.dialog.isDialogOpen = dialog.isDialogOpen;
      state.dialog.buttonStatus = dialog.buttonStatus;
      state.dialog.title = dialog.title;
    },
    SET_PAGE_TITLE(state, val) {
      state.pageTitle = val;
    },
    SET_ADMIN_TYPE(state, type) {
      console.log(type);
      state.isAdminType = type;
    },
  },
  actions: {
    FETCH_PAGE_TITLE(context, title) {
      context.commit("SET_PAGE_TITLE", title);
    },
    FETCH_ADMIN_TYPE(context, type) {
      context.commit("SET_ADMIN_TYPE", type);
    },
  },
  modules: {
    views,
  },
});
