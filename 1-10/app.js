var app=Vue.createApp({
    data(){
      return {
          msg:"Welcome to vue js 3",
          count:0,
          num:"",
          result:"",
          skills:[{name:"html", experience:5},
                  {name:"css", experience: 7},
                  {name:"js", experience:3}
                ],
          newSkill:{}
      };
    },
    methods:{
        increase(){
            this.count++;
        },
        decrease(){
            this.count--;
        },
        handleInput(e){
          this.num=e.target.value;
        },
        double(){
            this.result=this.num * 2;
        },
        square(){
            this.result=this.num * this.num;
        },
        reset(){
            this.num="";
            this.result="";
        },
        addSkill(){
           this.skills.push({ name: this.newSkill, experience:0});
           this.newSkill={};
        },
        removeSkill(i){
            this.skills.splice(i, 1);
        }
    }
});

app.mount("#app");