import { createStore } from "vuex";
import createUser from "@/composables/Auth/UseCreateUser";
import loginUser from "@/composables/Auth/UseLoginUser";
import verifyIsAuthReady from "@/composables/Auth/verifyIsAuthReady";
import VueCookies from "vue-cookies";
import { useRouter } from 'vue-router';

const store = createStore({
    state: {
        user: null, // Holds information about the logged-in user
        authIsReady: false, // Indicates if authentication data is ready
    },
    getters: {},
    mutations: {
        /**
         * Sets the user data in the state
         *
         * @param {Object} state - The Vuex state
         * @param {Object} payload - User data including username and password
         */
        setUser(state, payload) {
            state.user = payload;
        },
        /**
         * Sets the authentication readiness state
         *
         * @param {Object} state - The Vuex state
         * @param {boolean} payload - Indicates if authentication is ready
         */
        setAuthIsReady(state, payload) {
            state.authIsReady = payload;
        },
    },
    actions: {
        /**
         * Action to create a user account
         *
         * @param {Object} context - The Vuex action context
         * @param {Object} data - User data including email and password
         */
        async signup(context, { email, password }) {
            console.log("signup action");

            const response = await createUser(email, password);
            console.log(response.response.data.userId);

            if (response) {
                context.commit("setAuthIsReady", true);
                context.commit("setUser", response.response.data);
                $cookies.set("authId", response.response.data.userId);
            } else {
                //  throw new Error("Could not complete signup action");
            }
        },
        /**
         * Action to log in a user
         *
         * @param {Object} context - The Vuex action context
         * @param {Object} data - User data including email and password
         */
        async login(context, { email, password }) {
            //  console.log("login action");

            const response = await loginUser(email, password);
            console.log(response);

            if (response) {
                context.commit("setAuthIsReady", true);
                context.commit("setUser", response.response.data);
                $cookies.set("authId", response.response.data.userId);
            } else {
                // throw new Error("Could not complete login action");
            }
        },
        /**
         * Logs out the user
         *
         * @param {Object} context - The Vuex action context
         */
        logout(context) {
            console.log("logout action");


            $cookies.remove("authId");
            context.commit("setUser", null);
            context.commit("setAuthIsReady", false);
        },
    },
    modules: {},
});

// Initialize the app (consider renaming the action)
// store.dispatch("initApp"); 

// Auto-login if authId cookie is present
if ($cookies.get("authId")) {
    try {
        const user = await verifyIsAuthReady($cookies.get("authId"));
        store.commit("setAuthIsReady", true);
        store.commit("setUser", user);
    } catch (error) {
        console.error("Error verifying authentication:", error);
    }
}

export default store;
