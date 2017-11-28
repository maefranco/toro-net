<template>
  <div class="container" v-if="this.$store.state.user.displayName">
    <h4>Welcome {{this.$store.state.user.displayName}}! What's happening?</h4>
    <br>
    <div class="form-group">
      <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
    </div>
    <div class="form-group">


      <textarea class="form-control" id="body" rows="5" placeholder="Write your thoughts here..." v-model="body">
      </textarea>



    </div>
    <button class="btn btn-primary" @click="addPost()">Post!</button>
    <hr>
  </div>



<div id="content">
This is the first post attempt. it is in the works! abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz</div>
<button>Read more</button>



  <div class="container" v-else>
    <!-- <h4>
                    <h1>WHAT IS GOING ON? </h1>
    </h4> -->
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
      body: ''
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
}
</script>

<!--
<textarea>

document.querySelector('button').addEventListener('click', function() {
document.querySelector('#content').style.height= 'auto';
this.style.display= 'none';
});

body {
font: 14px verdana;
}

#content {
overflow: hidden;
height: 3.6em;
line-height: 1.2em;
width: 200px;
}

<div id="content">
This is the first post attempt. it is in the works! abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz</div>
<button>Read more</button>

<textarea>
-->
