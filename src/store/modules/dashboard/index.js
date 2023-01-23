import mutations from "./utils/mutations";
import actions from "./utils/actions";
import getters from "./utils/getters";

export default {
  namespaced: true,
  state() {
    return {
      table: {
        totalItems: 0,
        totalPages: 1,
        allData: [],
        filters: [],
        search: null,
        page: null,
        loading: false,
        progress: 0,
      },
      fields: {
        accountId: 1,
        arrivingArabicName: null,
        arrivingEnglishName: null,
        sort: null,
      },
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
