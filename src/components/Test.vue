<template>
    <div>
        <h1 v-if="seen">Hello Welcome to the world of the Vue Js</h1>
        <h1 v-else>Hello Welcome to the world</h1>
        <button v-on:click="display">Toggle Me!</button>
        <table border="2px">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email Address</td>
            </tr>
            <tr v-for="item in users" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
            </tr>
        </table>
        <!-- <h1>{{data}}</h1> -->
        <!-- <button v-on:click="hello('Akshay kashyap')">Click Me!</button> -->
    </div>
</template>
<script>
export default {
    name: 'Test',
    props: {
        data: String,
        msg: String
    }, 
    data()
    {
        // return {
        //     seen:true
        // },
        return {
            users: [
               {id:1,name:'Akshay kashyap',email:'Akshay95kashyap@gmail.com'},
               {id:2,name:'Abhi kashyap',email:'Abhi123@gmail.com'},
               {id:3,name:'Amrita kashyap',email:'Amrita32@gmail.com'},
               {id:4,name:'Manish kashyap',email:'Manish153@gmail.com'},
               {id:5,name:'Ashok kashyap',email:'Ashok83@gmail.com'},
            ]
        }
    },
    methods: {
        hello(a) {
           alert(a);
        },
        display()
        {
            this.seen=!this.seen;
        }   
    },
   

}
</script>