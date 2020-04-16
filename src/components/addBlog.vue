<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
          <input type="checkbox" value="ninjas" v-model="blog.categories">
          <!-- blog.categories is attaching the checkbox to the data below -->
        <label>Non-Ninjas</label>
          <input type="checkbox" value="non-ninjas" v-model="blog.categories">
        <label>Vue</label>
          <input type="checkbox" value="vue" v-model="blog.categories">
        <label>React</label>
          <input type="checkbox" value="react" v-model="blog.categories">
      </div>

      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author.id">{{ author }}</option>
      </select>
    </form>

    <div id="preview">
      <h3>Preview blog:</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content: </p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category.id">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ''
      },
      authors: ['the net ninja', 'sarah drasner', 'evan you', 'zuc']
    };
  },
  methods: {}
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
