<template>
    <div>
        <Header title='我的喵喵'/>
            <div id="content">
                <Login></Login>
            </div>
        <TebBar/>
    </div>
</template>
<script>
import Header from '@/components/Header'
import TebBar from '@/components/TebBar'
import Login from '@/components/Login'
export default {
    name:'Mine',
    components:{
        TebBar,
        Header,
        Login
    }
}
</script>
<style  scoped>

</style>
