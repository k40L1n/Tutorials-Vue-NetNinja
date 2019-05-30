// var one = new Vue({
//   el: "#vue-app-one",
//   data: {
//     title: "Vue App One"
//   },
//   methods: {},
//   computed: {
//     greet: function() {
//       return "Hello from savage App One dammit";
//     }
//   }
// });

// var two = new Vue({
//   el: "#vue-app-two",
//   data: {
//     title: "Vue App Two"
//   },
//   methods: {
//     changeTitle: function() {
//       one.title = "communicating from app two";
//     }
//   },
//   computed: {
//     greet: function() {
//       return "Niggas Ninjas from App Two";
//     }
//   }
// });

// // change title from outside vue instance altogether
// two.title = "Changed from outside";
/////////////////////***************************************************** */
// Vue.component("greeting", {
//   template:
//     '<p> Hey there, I am {{ name }} <button v-on:click="changeName">Change Name</button></p>',
//   data: function() {
//     return {
//       name: "Yoshi"
//     };
//   },
//   methods: {
//     changeName: function() {
//       this.name = "Mario";
//     }
//   }
// });
// new Vue({
//   el: "#vue-app-one"
// });
// new Vue({
//   el: "#vue-app-two"
// });
/////////*************************************************************** */
// new Vue({
//   el: "#vue-app",
//   data: {
//     output: "Your fav food"
//   },
//   methods: {
//     readRefs: function() {
//       console.log(this.$refs.test.innerText);
//       this.output = this.$refs.input.value;
//     }
//   }
// });
// ********************************************************************** */


new Vue({
    el:'#vue-app',
    data:{
        
    }
});
