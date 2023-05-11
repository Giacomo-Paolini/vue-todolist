const {createApp} = Vue

createApp ({
    data() {
        return {
            newTask: "",
            list: [
                {
                    text: "Spesa",
                    done: false,
                },
                {
                    text: "Pulizia casa",
                    done: false,
                },
                {
                    text: "Comprare regalo",
                    done: false,
                }
            ]
        }
    },
    methods: {
        addTask() {
            if (this.newTask.length > 2) {
                this.list.push({
                    text: this.newTask,
                    done: false
                });
                this.newTask = "";
            }
        },
        completeTask(i) {
            this.list[i].done = !this.list[i].done;
        },
        removeTask(i) {
            this.list.splice(i, 1);
        },
        textDecoration(i) {
            if (this.list[i].done == true) {
                return "text-decoration-line-through";
            }
        },
    }
}).mount('#app')