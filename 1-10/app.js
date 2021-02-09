var app=Vue.createApp({
    data(){
      return {
          msg:"Welcome to vue js 3",
          count:0,
          num:"",
          result:""
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
        }
    }
});

app.mount("#app");