export default {
    computed: {
        filteredBlogs: function() {
          return this.blogs.filter((blog) => {
            return blog.body.match(this.search)
          });
         }
        // filteredBodies: function(){
        //   return this.blogs.filter((blog) => {
        //     return blog.body.match(this.search)
        //   })
        // },
        // comboFilter: function() {
        //   this.filteredBlogs;
        //   this.filteredBodies;
        // }
        
       }
}