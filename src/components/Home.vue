<template>
<div>

<div class="container" v-if="this.$store.state.user.displayName">
  <h4>Welcome {{this.$store.state.user.displayName}}! What's happening?</h4>
  <br>
    <div class="row">

      <div class="col-xs-6 col-xs-6 col-md-push-1">

        <div class="form-group">
          <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
        </div>

        <div class="form-group">
          <textarea class="form-control" id="body" rows="5" placeholder="Please post here!" v-model="body"></textarea>
        </div>

        <!--
        <div id="content">
        This is the first post attempt. it is in the works! abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz</div>
        <button>Read more</button>
        -->

        <button class="btn btn-primary" @click="addPost()">Post!</button>
      </div>

      <div class="col-xs-6 col-md-push-2">

        <div class="sidebar-nav-fixed affix">
          <div class="demo-content bg-alt">
            <!-- Example friend list insertion -->
            <h3>Friend Tree</h3>
            <tree :friendpath="friendpath"></tree>
          </div>
        </div>

      </div>

        <!--/sidebar-nav-fixed -->
    </div>

</div>

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


</div>
</template>


<script>
import tree from './Tree.vue';

export default {
  name: 'Home',
  components: {
    tree,
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
      body: ''
    };
  },
  computed: {
    friendpath: function()
    {
      // return this.$store.state.getter.friendpath;
    }
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

<!--
<div id="content">
This is the first post attempt. it is in the works! abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz</div>
<button>Read more</button>

<textarea>
-->

.demo-content{
       padding: 15px;
       font-size: 18px;
       min-height: 400px;
       min-width: 350px;
       background: #dbdfe5
;
       margin-bottom: 10px;
   }
   .demo-content.bg-alt{
       background: #778899
;
   }


</style>
