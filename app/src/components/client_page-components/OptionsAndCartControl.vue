<template>
    <div class="flex flex-col">
        <h1 class="font-semibold mt-5 text-lg">Extra options:</h1>
        <ul class="my-12 self-center flex flex-row gap-7">
            <li v-for="option in this.getIngredients" :key="option.id" class="flex flex-col gap-2">
                <input type="checkbox" v-model="option.checked">
                <span class="text-lg font-semibold text-emerald-700">{{option.name}}</span>
            </li>
        </ul>
        <div class="flex flex-row justify-between self-center">
            <div class="hidden">counter</div>
            <div class="hidden">plus</div>
            <div class="hidden">minus</div>
            <button class=" bg-slate-500 hover:bg-slate-400 text-white font-semibold py-2 px-4 mb-5 rounded-md" @click="addToCart">Add to cart</button>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'OptionsAndCartControl',
    data() {
        return {
            options: this.getIngredients,
        };
    },
    methods: {
        ...mapActions(['fetchIngredients', 'addSelected']),
        addToCart() {
            this.addSelected(this.options);
            console.log(this.getSelected)
        },
        addToPizza() {
            this.options.forEach(item => {
                if (item.checked) {
                    this.addSelected(item)
                }
            });
        }
    },
    computed: {
        ...mapGetters(['getIngredients', 'getSelected']),
    },
    
}

</script>