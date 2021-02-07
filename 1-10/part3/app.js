var app=Vue.createApp({
    data(){
      return {
          msg:"Welcome to vue js 3",
          count:0
      };
    },
    methods:{
        increase(){
            this.count++;
        },
        decrease(){
            this.count--;
        }
    }
});

app.mount("#app");