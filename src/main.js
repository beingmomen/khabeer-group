import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";

// Packages
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

// Global Components
import TheTable from "./components/helpers/TheTable.vue";
import TheModal from "./components/helpers/TheModal.vue";
import TheInput from "./components/form/TheInput.vue";
import TheFile from "./components/form/TheFile.vue";
import TheFiles from "./components/form/TheFiles.vue";
import TheSelect from "./components/form/TheSelect.vue";

// Import CSS
import "./index.scss";
import "./assets/main.css";
import "./assets/index.scss";
import "@ocrv/vue-tailwind-pagination/styles";

// Import JS
import axiosPlugin from "./plugins/axios.js";

import fontawesome from "./plugins/fontawesome";
import i18n from "./plugins/i18n";
import { Toast, options } from "./plugins/toast";

const app = createApp(App);

app.use(axiosPlugin);
app.use(router);
app.use(store);
app.use(i18n);
app.use(Toast, options);

app.component(fontawesome.fontIcon, fontawesome.FontAwesomeIcon);
app.component("Modal", TheModal);
app.component("Table", TheTable);
app.component("Input", TheInput);
app.component("File", TheFile);
app.component("Files", TheFiles);
app.component("Select", TheSelect);
app.component("Pagination", VueTailwindPagination);

app.mount("#app");
