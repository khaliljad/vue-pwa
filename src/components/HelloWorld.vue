<template>
  <div class="container d-flex flex-wrap justify-content-between">
    <div class="input-group m-5">
      <div class="input-group-prepend"></div>
      <input
        type="text"
        class="form-control"
        placeholder="Add post"
        v-model="post_data.title"
      />
      <button type="submit" @click="AddPost(post_data)">submit</button>
    </div>
    <div
      class="card mb-5"
      style="width: 18rem"
      v-for="post in posts"
      :key="post.id"
    >
      <img
        class="card-img-top"
        src="https://placeimg.com/640/480/nature"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ post.title | textLength(15) }}</h5>
        <p class="card-text">{{ post.body | textLength(65) }}</p>
        <button class="btn btn-danger" @click="deletePost(post.id)">
          Delete {{ post.id }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import store from "../store/index";
import Vuex from "vuex";
global.v = Vuex;

export default {
  name: "HelloWorld",
  store: store,
  props: {
    msg: String,
  },

  data: function () {
    return {
      post_data: {
        title: null,
        id: 1,
        body: "test body",
      },
    };
  },

  methods: {
    ...Vuex.mapActions(["AddPost"]),
    ...Vuex.mapActions(["deletePost"]),
  },

  computed: {
    ...Vuex.mapGetters(["posts"]),
  },

  // mounted() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => (this.posts = response.data));
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-body a {
  color: #fff;
}
</style>
