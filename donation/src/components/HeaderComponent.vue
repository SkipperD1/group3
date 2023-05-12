<template>
    <div class="navbar">
        <nav class="nav">
            <router-link class="li" to="/">Home</router-link>
            <router-link class="li" to="/about">About</router-link>
            <router-link class="li" to="/contact">Contact</router-link>
            <router-link class="li" to="/signin">Sign In</router-link>
        </nav>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.navbar{
    display: inline-block;
    position: absolute;
    top: 5%;
    width: 100%;
    flex-direction: column;
    display: inline;
    align-items: center;
    align-content: center;
    text-align: center;
    justify-content: space-evenly;
    list-style-type: none;
    z-index: 100;
}
.nav{
    display: flex;
    position: relative;
    align-items: center;
    align-content: center;
    background-color: #6592a3;
    border-radius: 30px;
    text-decoration: none;
    text-align: center;
    justify-content: space-evenly;
    list-style-type: none;
    font-size: 17px;
    padding: 14px 16px;
    margin: 0 50px;
}

.li{
    color: white;
    border-radius: 30px;
    position: relative;
    align-items: center;
    align-content: center;
    display: inline-block;
    text-decoration: none;
}

</style>