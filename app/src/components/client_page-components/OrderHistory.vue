<template>
    <div>
        <div class="bg-slate-700 h-screen flex justify-center">
            <div class="w-11/12  mt-24 bg-slate-500 rounded-t-2xl flex flex-col gap-10">
                <h1 class="mt-12 text-white font-semibold text-2xl">Order History</h1>
                    <table class="border-2 mx-20 text-white font-semibold">
                        <thead class="border-2">
                            <tr>
                                <th class="border-2">Order Number</th>
                                <th class="border-2">Pizzas</th>
                                <th class="border-2">Price</th>
                                <th class="border-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in this.getOrders" :key="item" class="border-2">
                                <td class="border-2 py-5">{{ item.id }}</td>
                                <td v-for="pizza in item.pizzas" :key="pizza.id" class="flex flex-col">
                                    <h2 class="self-center">{{pizza.name}}</h2>
                                </td>
                                <td class="border-2">{{ item.price }} USD</td>
                                <td class="border-2">{{ item.date }}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'OrderHistory',
    computed: {
        ...mapGetters(['getOrders']),
    },
}

</script>