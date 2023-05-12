<template>
    <div class="main">
        <div class="home-nav">
            <router-link class="li" to="/">Home</router-link>
        </div>
        <div class="container">
            <h2 class="title"><strong>Sign in</strong></h2>
            <form @submit.prevent="submit">
                <input class="input" type="text" placeholder="Enter Username" v-model="username" id="Enter Username" />
                <input class="input" type="password" placeholder="Password" v-model="password" id="Enter Password" />
                <button v-on:click="signIn" class="signin-btn">Sign in</button>
                <p class="quest">
                    Don't have an account yet?
                    <router-link to="/register" class="para"> Register </router-link>
                </p>
            </form>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
              username: '',
              password: ''
            };
        },

        methods: {
            submit(){
                let userData={
                    username: this.username,
                    password: this.password
                }
                console.log(userData);
             
             this.username = ''
             this.password = ''
            },
        },
    }
</script>

<style lang="css" scoped>

.main{
    background: rgb(174,229,238);
    background: linear-gradient(90deg, rgba(174,229,238,1) 0%, rgba(148,187,233,1) 100%);
    margin: 0;
    height:100vh;
    width: 100%;
    overflow: hidden;
    box-sizing:border-box;
}
.home-nav{
    margin: 15px 110px;
}

.li{
    color: #002d52;
    text-decoration: none;
}
.container{
    display: flex;
    width:300px;
    max-width:60%;
    margin-top: 100px;
    position: relative;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: auto;
    padding: 90px;
    margin-top: 100px;
    background-color: white;
    border-radius: 60px;
    opacity: 0.9;
}
.input{
    position: relative;
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    border-radius: 25px;
}
.signin-btn{
    text-align: center;
    font-size: medium;
    font-weight: 200;
    border: 1px solid skyblue;
    color: white;
    cursor: pointer;
    border:1px solid #d3d3d3;
    padding:1rem 2rem;
    border-radius:25px;
    background:#025192
}
.title{
    align-items: center;
    position: absolute;
    top:8%;
    left:50%;
    transform:translate(-50%,-50%);
    color: #024d8a;
    text-transform: uppercase;
}

.quest{
  color: #025192;
}
.para{
    text-decoration: none;
    color: goldenrod;
}
</style>