import {createStore} from "vuex";
import nav from "./nav";
import url from "./url";
import messages from "./messages";
import breadcrumb from "./breadcrumb";

const store = createStore({
    modules: {
      url: url,
      breadcrumb: breadcrumb,
      messages: messages,
      nav: nav,
    },
  });

export default store;
