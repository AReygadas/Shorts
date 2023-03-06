<script setup>
import {ref, computed} from 'vue'

const currencyFormatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

const price = ref(0);
    const formattedPrice = computed(() => {
      return '$' + price.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });

    const currency = (el, { value, oldValue, expression, arg, modifiers }) => {
      el.addEventListener('keyup', function(event) {
        el.value = '$' + el.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
      });
    };

    
</script>

<template>

    <div class="container">
        <div class="box">
            <input type="text" class="money" @blur="formater"/>
            <input type="text" class="money" />
            <input type="text" class="money" />
        </div>
    </div>

</template>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box{
        display: grid;
        gap: 3rem;
    }
    .money{
        font-size: 3rem;
        color: black;
    }
</style>