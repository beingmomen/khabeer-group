import { createStore } from "vuex";

import rootMutations from "./utils/mutations";
import rootActions from "./utils/actions";
import rootGetters from "./utils/getters";

// Import Modules
import auth from "./modules/auth/index";
import categories from "./modules/categories/index";
import dashboard from "./modules/dashboard/index";

const store = createStore({
  modules: {
    auth,
    categories,
    dashboard,
  },
  state() {
    return {
      token:
        "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjAwMDdjYWY1LWFjNjktNDViNi1hOTA1LWI1NjBlNTkxOWI4OSIsImV4cCI6MTY3NDU1ODQxMSwiaXNzIjoiQ2xpbml2aXNvciIsImF1ZCI6IkNsaW5pdmlzb3IifQ.9QmD8_S7LzXfeCUpMnx3QU-vcShuiLUvv2oZbFhnzwI",
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
