var app=Vue.createApp({
    data(){
      return {
          msg:"Welcome to vue js 3",
          count:0,
          num:"",
          result:"",
          skills:['html','css','javascript'],
          newSkill:""
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
           this.skills.push(this.newSkill);
           this.newSkill="";
        },
        removeSkill(i){
            this.skills.splice(i, 1);
        }
    }
});

app.mount("#app");