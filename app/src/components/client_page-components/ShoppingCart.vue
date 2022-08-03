<template>
    <div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ShoppingCart',
    computed: {
        ...mapGetters(['getCart']),
    }
}

</script>