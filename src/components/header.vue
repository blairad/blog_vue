<template>
    <nav>
        <ul>
            <li><router-link to="/">Blog</router-link></li>
            <li><router-link to="/add">Add a new blog</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav {
    background: #444;
    padding: 10px 0;
    margin-bottom: 40px;
}
/* class below is there automatically so can be used if needed. so if i click on blog it'll highlight and if click on add-blog it'll highlight that instead. the 'exact' can be added to the <router-link> above and added after teh "" section  */
.router-link-exact-active {
    background: #eee;
    color: #444;
}

</style>