<template>
    <div class="flex flex-row">  
        <SideNavBar></SideNavBar>
        <router-view class="w-screen h-full"></router-view>
    </div>
</template>

<script>
import SideNavBar from './client_page-components/SideNavBar.vue';

export default {
    name: 'ClientPage',
    components: {
    SideNavBar
}
}

</script>