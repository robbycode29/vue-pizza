<template>
    <div class="bg-slate-700 flex justify-center">
        <div class="w-8/12 h-[700px] mt-24 bg-slate-500 rounded-2xl flex flex-col gap-10">
            <h1 class="mt-12 text-white font-semibold text-2xl">Shopping Cart</h1>
            <table class="border-2 mx-20 text-white font-semibold">
                <thead class="border-2">
                    <tr>
                        <th>Pizza</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in itemList" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }} USD</td>
                        <td>
                            <button @click="removeItem(item.id)"><img class="pb-1" width="10px" src="../../assets/minus-white.png"/></button>
                            {{ item.nrOfItemsInCart }}
                            <button @click="addItem(item.id)"><img width="10px" src="../../assets/plus-white.png"/></button>
                        </td>
                        <td>{{ item.price*item.nrOfItemsInCart }} USD</td>
                    </tr>
                </tbody>
                <tfoot class="border-2">
                    <tr>
                        <td colspan="3">Total</td>
                        <td>{{ total }} USD</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ShoppingCart',
    data() {
        return {
            cart: this.getCart,
        }
    },
    methods: {
        ...mapActions(['addPizzaToCart', 'removePizzaFromCart', 'updatePizzaInCart']),
        
        addItem(id) {
            this.cart = this.getCart;
            this.itemList.forEach(item => {
                if (item.id === id) {
                    item.nrOfItemsInCart += 1;
                    this.addPizzaToCart(item);
                }

            });
        },
        removeItem(id) {
            this.cart = this.getCart
            this.itemList.forEach(item => {
                if (item.id === id) {
                    if (item.nrOfItemsInCart > 1) {
                        item.nrOfItemsInCart -= 1;
                        this.updatePizzaInCart(item)
                    } 
                    else if ( item.nrOfItemsInCart === 1) {
                        item.nrOfItemsInCart = 0
                        item.inCart = false;
                        this.removePizzaFromCart(item)
                    }
                }
            })
            if (this.itemList.length === 0) {
                this.$router.push('/pizza/');
            }
        }
    },
    computed: {
        ...mapGetters(['getCart']),
        itemList() {
            let uniqueItems = [...new Set(this.getCart)];
            return uniqueItems;
        },
        total() {
            let total = 0;
            for (let item of this.itemList) {
                total += item.price * item.nrOfItemsInCart;
            }
            return total;
        }
    }
}

</script>