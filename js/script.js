const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello World!",
            img: "https://picsum.photos/300/300",
        }
    },
    methods: {
        handleClick() {
            alert(this.username)
        }
    }
}).mount("#app")