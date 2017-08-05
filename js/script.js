var quiz2 = [{"vertrek":"10:15","aankomst":"12:07","afstand":96,"snelheid":"80 km/u ","correct_answer":40,"answer1":62,"answer2":50,"answer3":55,"answer4":40},
             {"vertrek":"9:10","aankomst":"10:47","afstand":70,"snelheid":"70 km/u ","correct_answer":37,"answer1":37,"answer2":47,"answer3":52,"answer4":37},
             {"vertrek":"8:05","aankomst":"9:50","afstand":40,"snelheid":"35 km/u ","correct_answer":36,"answer1":53,"answer2":46,"answer3":51,"answer4":36},
             {"vertrek":"7:10","aankomst":"8:40","afstand":120,"snelheid":"100 km/u ","correct_answer":18,"answer1":40,"answer2":28,"answer3":33,"answer4":18},
             {"vertrek":"6:15","aankomst":"8:30","afstand":150,"snelheid":"75 km/u ","correct_answer":15,"answer1":105,"answer2":25,"answer3":30,"answer4":15},
             {"vertrek":"8:20","aankomst":"11:30","afstand":130,"snelheid":"65 km/u ","correct_answer":70,"answer1":160,"answer2":80,"answer3":85,"answer4":70},
             {"vertrek":"7:25","aankomst":"9:45","afstand":70,"snelheid":"50 km/u ","correct_answer":56,"answer1":97,"answer2":66,"answer3":71,"answer4":56},
             {"vertrek":"6:30","aankomst":"10:05","afstand":110,"snelheid":"55 km/u ","correct_answer":95,"answer1":185,"answer2":105,"answer3":110,"answer4":95},
             {"vertrek":"5:05","aankomst":"7:15","afstand":50,"snelheid":"40 km/u ","correct_answer":55,"answer1":82,"answer2":65,"answer3":70,"answer4":55},
             {"vertrek":"9:10","aankomst":"12:30","afstand":70,"snelheid":"35 km/u ","correct_answer":80,"answer1":170,"answer2":90,"answer3":95,"answer4":80},
             {"vertrek":"8:15","aankomst":"10:15","afstand":50,"snelheid":"30 km/u ","correct_answer":20,"answer1":84,"answer2":30,"answer3":35,"answer4":20},
             {"vertrek":"7:20","aankomst":"9:30","afstand":90,"snelheid":"45 km/u ","correct_answer":10,"answer1":100,"answer2":20,"answer3":25,"answer4":10},
             {"vertrek":"6:25","aankomst":"8:23","afstand":75,"snelheid":"50 km/u ","correct_answer":28,"answer1":78,"answer2":38,"answer3":43,"answer4":28},
             {"vertrek":"5:30","aankomst":"7:40","afstand":50,"snelheid":"50 km/u ","correct_answer":70,"answer1":70,"answer2":80,"answer3":85,"answer4":70},
             {"vertrek":"4:05","aankomst":"6:18","afstand":45,"snelheid":"60 km/u ","correct_answer":88,"answer1":53,"answer2":98,"answer3":103,"answer4":88},
             {"vertrek":"2:10","aankomst":"4:38","afstand":20,"snelheid":"40 km/u ","correct_answer":118,"answer1":28,"answer2":128,"answer3":133,"answer4":118},
             {"vertrek":"2:15","aankomst":"4:25","afstand":60,"snelheid":"50 km/u ","correct_answer":58,"answer1":80,"answer2":68,"answer3":73,"answer4":58},
             {"vertrek":"1:20","aankomst":"3:45","afstand":6,"snelheid":"6 km/u ","correct_answer":85,"answer1":85,"answer2":95,"answer3":100,"answer4":85},
             {"vertrek":"9:25","aankomst":"11:35","afstand":105,"snelheid":"70 km/u ","correct_answer":40,"answer1":90,"answer2":50,"answer3":55,"answer4":40},
             {"vertrek":"8:30","aankomst":"10:24","afstand":120,"snelheid":"100 km/u ","correct_answer":42,"answer1":64,"answer2":52,"answer3":57,"answer4":42},
             {"vertrek":"7:05","aankomst":"8:14","afstand":40,"snelheid":"40 km/u ","correct_answer":9,"answer1":9,"answer2":19,"answer3":24,"answer4":9},
             {"vertrek":"6:10","aankomst":"7:34","afstand":40,"snelheid":"50 km/u ","correct_answer":36,"answer1":9,"answer2":46,"answer3":51,"answer4":36},
             {"vertrek":"5:15","aankomst":"6:45","afstand":45,"snelheid":"60 km/u ","correct_answer":45,"answer1":10,"answer2":55,"answer3":60,"answer4":45},
             {"vertrek":"4:20","aankomst":"6:14","afstand":70,"snelheid":"70 km/u ","correct_answer":54,"answer1":54,"answer2":64,"answer3":69,"answer4":54},
             {"vertrek":"3:25","aankomst":"5:45","afstand":100,"snelheid":"80 km/u ","correct_answer":65,"answer1":92,"answer2":75,"answer3":80,"answer4":65},
             {"vertrek":"2:30","aankomst":"4:23","afstand":56,"snelheid":"40 km/u ","correct_answer":29,"answer1":70,"answer2":39,"answer3":44,"answer4":29},
             {"vertrek":"1:05","aankomst":"3:15","afstand":75,"snelheid":"50 km/u ","correct_answer":40,"answer1":90,"answer2":50,"answer3":55,"answer4":40},
             {"vertrek":"10:10","aankomst":"12:35","afstand":120,"snelheid":"60 km/u ","correct_answer":25,"answer1":115,"answer2":35,"answer3":40,"answer4":25},
             {"vertrek":"7:15","aankomst":"11:07","afstand":210,"snelheid":"70 km/u ","correct_answer":52,"answer1":212,"answer2":62,"answer3":67,"answer4":52}];

var example2 = new Vue({
  
  el: "#test",

  data: {
    questionIndex: 0,
    quiz2: quiz2,
    pick: "none",
    score: 0
  },

  computed: {
    options: function() {
      return [this.quiz2[this.questionIndex].answer1, this.quiz2[this.questionIndex].answer2, this.quiz2[this.questionIndex].answer3, this.quiz2[this.questionIndex].answer4].sort(function(a, b){return 0.5 - Math.random()})
    },

},

  
  methods: {
    next: function() {
      this.questionIndex++;
    },
    prev: function() {
      this.questionIndex--;
    },
    check: function() {
      if (this.pick === quiz2[this.questionIndex].correct_answer) {
        alert("good job!");
        this.score++;
      } else {
        alert("try again!");
      }
    }
  }
});
