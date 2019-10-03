<template>
    <div class="nav">
        <ul>
            <li><router-link to="login">Login</router-link></li>
            <li>Link 2</li>
            <li>Link 3</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .nav{
        width: 100%;
        margin: 0;
        height: 45px;
        display: inline-block;
        ul{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            padding: 0;
            margin: 0;
            list-style-type: none;
            li{
                float: left;
            }
            li, a{
                padding: 16px;
            }
        }
    }
</style>