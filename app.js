// new Vue({
//   el: "#vue-app",
//   data: {
//     age: 25,
//     x: 0,
//     y: 0
//   },
//   methods: {
//     add: function(inc) {
//       this.age += inc;
//     },
//     subtract: function(dec) {
//       this.age -= dec;
//     },
//     updateXY: function(event) {
//       this.x = event.offsetX;
//       this.y = event.offsetY;
//     },
//     click: function() {
//       alert("you clicked me!");
//     }
//   }
// });

////////////////////////////////////////////

// new Vue({
//   el: "#vue-app",
//   data: {
//     name: "",
//     age: ""
//   },
//   methods: {
//     logName: function() {},
//     logAge: function() {}
//   }
// });
//////////////////////////////////////////////
// new Vue({
//   el: "#vue-app",
//   data: {
//     age: 20,
//     a: 0,
//     b: 0
//   },
//   methods: {
//     // addToA: function() {
//     //   console.log("addToA");
//     //   return this.a + this.age;
//     // },
//     // addToB: function() {
//     //   console.log("addToB");
//     //   return this.b + this.age;
//     // }
//   },
//   computed: {
//     addToA: function() {
//       console.log("addToA");
//       return this.a + this.age;
//     },
//     addToB: function() {
//       console.log("addToB");
//       return this.b + this.age;
//     }
//   }
// });
//////////////////////////////////////////////
// new Vue({
//   el: "#vue-app",
//   data: {
//     available: false,
//     nearby: false
//   },
//   computed: {
//     compClasses: function() {
//       return {
//         available: this.available,
//         nearby: this.nearby
//       };
//     }
//   }
// });
////////////////////////////////////////////
// new Vue({
//   el: "#vue-app",
//   data: {
//     error: false,
//     success: false
//   }
// });

// new Vue({
//   el: "#vue-app",
//   data: {
//     name: "Jack",
//     characters: ["Mario", "Luigi", "Yoshi", "Bowser"],
//     ninjas: [
//       {
//         name: "Ryu",
//         age: 25
//       },
//       {
//         name: "Yoshi",
//         age: 35
//       },
//       {
//         name: "Ken",
//         age: 45
//       }
//     ]
//   },
//   methods: {},
//   computed: {}
// });
