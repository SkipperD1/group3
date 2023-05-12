<template>

    
    <div class="main">

        <div class="head">
            <h2>Help For</h2>
            <h1 class="cap">ALL</h1>
            <p>Donate to save a life <span>Today</span></p>
            <router-link to="/signin"><button v-on:click="signIn" class="btns">Sign in</button></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.main{
    height: 100vh;
    background-image: url(../assets/img/eqrq.jpg);
    display: flex;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.head{
    position: relative;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: auto;
    padding: 90px;
    background-color: white;
    border-radius: 60px;
    opacity: 0.9;
    justify-content: center;
}

.cap{
    color: goldenrod;
    text-align: center;
    align-items: center;
    align-content: center;
    display: block;
    margin: 10px 0;
    font-size: 60px;
}

h2{
    margin-bottom: -10px;
    margin-top: -20px;
    color: rgb(88, 156, 182);

}

p{
    color: rgb(117, 117, 117);
}
span{
    color: goldenrod;
}

.home-nav{
    margin-left: 50px;
    margin-top: 30px;
}

.btns{
    align-items: center;
    align-content: center;
    display: flex;
    position: relative;
    text-align: center;
    font-size: medium;
    font-weight: 200;
    border: 1px solid skyblue;
    color: white;
    cursor: pointer;
    border:1px solid #d3d3d3;
    padding:1rem 2rem;
    border-radius:25px;
    background:#025192;
    margin: 0px 30px;
    margin-top: 20px;
}
.li{
    color: #002d52;
    text-decoration: none;
}
</style>