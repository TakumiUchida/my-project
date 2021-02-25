<template>
    <div class="todolist">
        <p id="title" class="is-size-2 mb-10">ToDoリスト</p>
        <div id="radio">
            <div id="list" v-for="state in status" :key="state.id">
                <input type="radio" name="show" :id="state.id" :value="state.value" v-model="show">
                <label :for="state.id">{{state.text}}</label>
            </div>
        </div>
        <table id="tasktable">
            <thead>
                <tr>
                    <th class="has-text-centered">ID</th>
                    <th class="has-text-centered">コメント</th>
                    <th class="has-text-centered">状態</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(todo, index) in showTasks" v-bind:key="index">
                    <td>{{ index }}</td>
                    <td>{{ todo.task }}</td>
                    <td>
                        <button v-on:click="changeTask(index)">{{ todo.status }}</button>
                        <button v-on:click="deleteTask(index)">削除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <form id="inputform">
            <h3 class="is-size-5 mt-10">新規タスクの追加</h3>
            <input type="text" class="mr-5" v-model="newTask">
            <input type="button" value="追加" v-on:click="addTask()">
        </form>
    </div>
</template>

<style>
    #title, #inputform, #radio {
        text-align: left;
    }
    .todolist {
        margin-left: 40%;
    }
    #list {
        display: inline-block;
        margin-right: 5px;
    }
    .mb-10 {
        margin-bottom: 10px;
    }
    .mt-10 {
        margin-top: 10px;
    }
    .mr-5  {
        margin-right: 5px;
    }
</style>
<script>
    export default {
        data: function() {
            return {
                status: [
                    {id: 'all', value: 0, text: 'すべて'},
                    {id: 'doing', value: 1, text: '未完了'},
                    {id: 'done', value: 2, text: '完了'}
                ],
                todos: [],
                newTask: '',
                show: 0
            }
        },
        methods: {
            addTask: function() {
                if(this.newTask == '') return;
                var todo = {
                    task: this.newTask,
                    status: '作業中'
                };
                this.todos.push(todo);
                this.newTask ='';
            },
            deleteTask: function(index) {
                console.log(index);
                this.todos.splice(index, 1)
            },
            changeTask: function(index) {
                if (this.todos[index].status === '作業中') {
                    this.todos[index].status = '完了';
                } else if(this.todos[index].status === '完了') {
                    this.todos[index].status = '作業中';
                }
            }
        },
        computed: {
            showTasks: function() {
                switch(this.show) {
                    case 0:
                        return this.todos;
                    case 1:
                        return this.todos.filter(e => e.status === '作業中');
                    case 2:
                        return this.todos.filter(e => e.status === '完了');
                    default:
                        return []
                }
            }
        }
    }
</script>