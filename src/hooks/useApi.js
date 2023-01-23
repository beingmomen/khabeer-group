import { computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useToast } from "vue-toastification";

export default (collectionName, baseURL) => {
  const store = useStore();
  const toast = useToast();
  const { t } = useI18n();

  const dataTable = computed(() => {
    return store.getters[`${collectionName}/table`];
  });

  const fetchData = async (page = 0, rows = 10) => {
    const params = {
      first: 0,
      page,
      rows,
    };
    const headers = {
      Authorization: `Bearer ${store.getters.token}`,
    };
    const { data } = await axios.get(`${baseURL}/GetAllArrivingMethods`, {
      params,
      headers,
    });

    await store.dispatch(`${collectionName}/fetchData`, data);
  };

  const fetchDataByQuery = async (page, rows = 10) => {
    fetchData(page && page - 1);
  };

  const fetchDocument = async (row) => {
    store.dispatch(`${collectionName}/showSingleData`, row);
  };

  const addDocument = async () => {
    const headers = {
      Authorization: `Bearer ${store.getters.token}`,
    };
    const fields = await store.getters[`${collectionName}/fields`];
    const { data } = await axios.post(
      `${baseURL}/AddOrUpdateArrivingMethod`,
      fields,
      { headers }
    );
    toast.success(data.message);
    fetchData();
    await store.dispatch(`${collectionName}/resetFields`);
  };

  const updateDocument = async (id) => {
    const headers = {
      Authorization: `Bearer ${store.getters.token}`,
    };
    const fields = await store.getters[`${collectionName}/fields`];
    const { data } = await axios.post(
      `${baseURL}/AddOrUpdateArrivingMethod`,
      { id, ...fields },
      { headers }
    );
    toast.success(data.message);
    fetchData();
    await store.dispatch(`${collectionName}/resetFields`);
  };

  const deleteDocument = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${store.getters.token}`,
      };
      const { data } = await axios.post(
        `${baseURL}/DeleteArrivingMethod`,
        { id },
        { headers }
      );
      toast.success(data);
    } catch (error) {
      // console.warn("error", error.message);
    }

    fetchData();
  };

  return {
    fetchData,
    fetchDataByQuery,
    fetchDocument,
    addDocument,
    updateDocument,
    deleteDocument,
  };
};
