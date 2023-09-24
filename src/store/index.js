import { createStore } from "vuex";
import createUser from "@/composables/Auth/UseCreateUser";
import loginUser from "@/composables/Auth/UseLoginUser";
import verifyIsAuthReady from "@/composables/Auth/verifyIsAuthReady";
import VueCookies from "vue-cookies";

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  getters: {},
  mutations: {
    /**
     *
     *
     * @param {Oject} state
     * @param {Object} payload data del usuario como usuario y contraseña
     */
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
  },
  actions: {
    /**
     * Funcion para crear cuenta
     *
     * @param {Object} context poder acceder al contexto de las mutations
     * @param {Array} { email, password } data
     */
    async singup(context, { email, password }) {
      console.log("singup action");

      const response = await createUser(email, password);
      console.log(response.response.data.userId);
      if (response) {
        context.commit("setAuthIsReady", true);
        context.commit("setUser", response.response.data);
        $cookies.set("authId", response.response.data.userId);
      } else {
        throw new Error("Could not complete singup action");
      }
    },
    /**
     *
     * @param {Object} context poder acceder al contexto de las mutations
     * @param {Array} { email, password } data
     */
    async login(context, { email, password }) {
      console.log("login action");

      const response = await loginUser(email, password);
      console.log(response.response.data.userId);
      if (response) {
        context.commit("setAuthIsReady", true);
        context.commit("setUser", response.response.data);
        $cookies.set("authId", response.response.data.userId);
      } else {
        throw new Error("Could not complete singup action");
      }
    },
    /**
     *
     * @param {Object} context poder acceder al contexto de las mutations
     * @param {Array} { email, password } data
     */
    logout(context) {
      console.log("logout  action");

      $cookies.remove("authId");
      context.commit("setUser", null);
      context.commit("setAuthIsReady", false);
    },
    test() {
      console.log("se tiene que ejecutar");
    },
  },
  modules: {},
});
//store.dispatch("initApp"); // Llamando a una acción ficticia "initApp"
if ($cookies.get("authId")) {
  try {
    const user = await verifyIsAuthReady($cookies.get("authId"));
    store.commit("setAuthIsReady", true);
    store.commit("setUser", user);
  } catch (error) {
    console.error("Error al verificar la autenticación:", error);
  }
}

export default store;
