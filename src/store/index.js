import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ],
};

const getters = {
  posts: (state) => state.posts,
};

const mutations = {
  ADD_POST: (state, data) => {
    state.posts.push({
      userId: 1,
      id: data.id,
      title: data.title,
      body: data.body,
    });
  },

  DELETE_POST: (state, post) => {
    console.log(post);
    console.log(state.posts.id);
  },
};

const actions = {
  AddPost: (store, data) => {
    data.id++;
    store.commit("ADD_POST", data);
  },

  deletePost: (store, post) => {
    store.commit("DELETE_POST", post);
  },
};

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  modules: {},
});

global.store = store;

export default store;
