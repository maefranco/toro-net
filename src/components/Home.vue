<template>

  <!-- if logged in -->
  <div class="container" v-if="this.$store.state.user.displayName">
    <h5>Welcome {{this.$store.state.user.displayName}}! What's happening?</h5>
    <div class="row">

              <!-- <div class="col-sm-6">

              </div> -->

              <div class=" col-sm-6">
                    <!-- <h4>Welcome {{this.$store.state.user.displayName}}! What's happening?</h4> -->
                    <br>
                        <div class="form-group">
                          <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
                        </div>
                          <div class="form-group">
                            <textarea class="form-control" id="body" rows="this.textareaHeight" style="overflow:hidden"  placeholder="Write your thoughts here..." v-on:click="expandTextarea()" v-model="body">
                            </textarea>
                            <p>WARNING...{{body}}...</p>
                          </div>
                        <button class="btn btn-primary" @click="addPost()">Post!</button>
                    <hr>
              </div>

            <div class=" col-sm-6">

            </div>
    </div>

</div>

  <!-- if not logged in -->
  <div class="container" v-else>

    <!-- navbar loaded -->
      <nav-bar> </nav-bar>

      <!--Home page content loaded  -->
      <hp-content> </hp-content>

      <hr>

      <!-- footer loaded  -->
      <footer-area> </footer-area>

  </div>
</template>

<style>
 .info_section{

    width: 600;
    height: 400;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
 }
</style>

<script>
export default {
  name: 'Home',
  data:{
    textareaHeight:50
  },
  data() {
    return {
      // date: Date.now(),
      // username: this.$store.user.username,
      // email: this.$store.user.email,
      // displayName: this.$store.user.displayName,
      // Are the above data to be included here?
      // I think not, since the data would be passed around more times
      // than is probably necessary... $store is accessible globally
      // throughout the app after all.
      title: '',
      body: '',

    };
  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', this.$store.state.posts)
    }
  },
  mounted() {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getUser')
  },
 expandTextarea() {
    // this.addEventListener('keyup', function () {
    //   this.style.overflow='hidden';
    //   this.style.height=0;
      this.style.height=this.scrollHeight+1;

    // }, false);

  }
  // expandTextarea('body')
}
</script>

 <script type="text/javascript">
// function expandTextarea(id) {
//   document.getElementById('id').addEventListener('keyup', function () {
//     this.style.overflow='hidden';
//     this.style.height=0;
//     this.style.height=this.scrollHeight+'px';
//
//   }, false);
//
// }
// expandTextarea('body');
 </script>
