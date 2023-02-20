console.log("hello vue");
const app = Vue.createApp({
    data(){
        return{
            title: 'minecraft',
            author: "steve",
            age: 500
        }
    },
    methods: {
        changeTitle(){
            this.title = "bruh"
        }
    }
})

app.mount("#app")