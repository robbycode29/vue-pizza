<template>
    <div class="flex flex-row h-full">  
        <SideNavBar></SideNavBar>
        <router-view class="w-screen"></router-view>
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