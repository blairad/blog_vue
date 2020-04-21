<template> 
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All blog articles</h1>
    <div v-for="blog in blogs" v-bind:key="blog.id" class="single-blog">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
        <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      blogs: []
    }
  },
  methods: {

  },
  created() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
              console.log(response);
             //access the reponse(data) object
              this.blogs = response.data.slice(0, 10);
          });

  }
}
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
