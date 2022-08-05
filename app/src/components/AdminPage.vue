<template>
    <div class="flex flex-row">  
        <SideNavBarAdmin></SideNavBarAdmin>
        <router-view class="w-screen h-screen"></router-view>
    </div>
</template>

<script>
import SideNavBarAdmin from "./admin_page-components/SideNavBarAdmin.vue";

export default {
    name: 'AdminPage',
    components: {
    SideNavBarAdmin
    },
}

</script>