<template>
    <div class="w-24 h-screen bg-slate-500 flex flex-col gap-16 hover:w-60 duration-200 overflow-hidden "> 
        <router-link to="/pizza/" class="flex flex-row w-12 ml-6 mt-16">
            <img class="w-12" src='../../assets/pizza-icon.png'/>
            <h2 class="text-slate-900 font-semibold text-lg ml-9 mt-3">Menu</h2>
        </router-link>
    </div>
</template>

<script>

    export default {
        name: 'SideNavBar',
    }

</script>

